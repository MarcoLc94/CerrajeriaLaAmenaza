

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
      title: "Tecnología",
      img: "/key-solid-36.png",
      description:
        "Trabajamos con equipos de última generación que nos permiten programar llaves y realizar duplicados con precisión y calidad.",
    },
    {
      title: "Atención Personalizada",
      img: "/user-check-regular-36.png",
      description:
        "Nos enfocamos en brindarte un servicio personalizado, adaptándonos a tus necesidades y garantizando tu satisfacción total.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-950 text-white text-center p-6">
      {valores.map((valor, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 text-justify"
        >
          <div className="flex items-center justify-center md:flex-col md:items-center">
            <img
              src={valor.img}
              alt={valor.title}
              className="w-10 h-10 md:mb-4"
            />
            <h3 className="font-bold text-lg md:mt-2">{valor.title}</h3>
          </div>
          <p className="mt-4 md:w-4/5">{valor.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValoresComponent;
