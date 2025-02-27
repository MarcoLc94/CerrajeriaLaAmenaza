import "./valoresComponent.css";
import "../fluidSlider/ImageSliderComponent";
import ImageSlider from "../fluidSlider/ImageSliderComponent";

const ValoresComponent = () => {
  const valores = [
    {
      title: "Seguridad",
      img: "/lock-open-alt-regular-36.png",
      description:
        "Garantizamos la máxima seguridad en cada duplicado y programación de llaves, utilizando tecnología avanzada para proteger tu vehículo.",
    },
    {
      title: "Rapidez",
      img: "/run-regular-36.png",
      description:
        "Ofrecemos servicios rápidos y eficientes para que nunca pierdas tiempo valioso. Solucionamos tus necesidades en el menor tiempo posible.",
    },
    {
      title: "Tecnologia",
      img: "/key-solid-36.png",
      description:
        "Trabajamos con equipos de última generación que nos permiten programar llaves y realizar duplicados con precisión y calidad.",
    },
    {
      title: "Atencion Personalizada",
      img: "/user-check-regular-36.png",
      description:
        "Nos enfocamos en brindarte un servicio personalizado, adaptándonos a tus necesidades y garantizando tu satisfacción total.",
    },
  ];

  return (
    <div className="cover">
      <ImageSlider />
      <section className="section-custom">
        <h1 className="custom-xd text-white text-justify p-4 pt-10 font-black">
          Cerrajero 24hrs con Servicios de apertura, diseño y programación de
          llaves para vehiculos.
        </h1>
        <div className="h-[30vh] p-5">
          {/* <div>
            <img src="/car-89_256.gif" alt="" />
          </div> */}
          <div>
            <h3 className="custom-description text-white text-justify">
              Ofrecemos soluciones de cerrajería automotriz rápidas, seguras y
              de alta calidad, incluyendo la venta de duplicados y la
              programación de llaves para vehículos. Ya sea que hayas perdido
              tus llaves o necesites un duplicado o programación, nuestro equipo
              está listo para ayudarte.
            </h3>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center p-6">
        {valores.map((valor, index) => (
          <div
            key={index}
            className="value-custom flex flex-col items-center justify-center p-4 text-center"
          >
            <div className="flex items-center justify-center md:flex-col md:items-center">
              <img
                src={valor.img}
                alt={valor.title}
                className="w-10 h-10 md:mb-4"
              />
              <h3 className="title-custom font-bold text-lg md:mt-2">
                {valor.title}
              </h3>
            </div>
            <p className="custom-description mt-4 md:w-4/5">
              {valor.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValoresComponent;
