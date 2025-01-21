import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png",
    "/image8.png",
    "/image9.png",
    "/image10.png",
    "/image11.png",
    "/image12.png",
    "/image13.png",
  ];

  const settings = {
    dots: false, // Desactiva los indicadores
    infinite: true, // Permite que el slider sea infinito
    speed: 4000, // Velocidad de la animación (ms)
    slidesToShow: 5, // Cuántas imágenes se muestran a la vez
    slidesToScroll: 1, // Desplaza una imagen a la vez para evitar movimientos bruscos
    autoplay: true, // Activa el desplazamiento automático
    autoplaySpeed: 1, // Intervalo de desplazamiento (ms) para que se vea continuo
    arrows: false, // Desactiva las flechas de navegación
    cssEase: "linear", // Transición suave y fluida
    pauseOnHover: false, // No pausa cuando se pasa el ratón
    swipeToSlide: true, // Permite deslizar las imágenes con el mouse/táctil
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        padding: "50px 0px 50px 0px",
        backgroundColor: "white",
      }}
    >
      <div className="text-center mb-6 font-extrabold text-2xl">
        <h1>Manejamos todas las marcas</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center align-middle">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%", // Ajusta el ancho a 100% del contenedor
                height: "auto", // Mantiene la proporción de aspecto de la imagen
                objectFit: "cover", // Cubre el área especificada sin deformar la imagen
                borderRadius: "10px", // Bordes redondeados
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
