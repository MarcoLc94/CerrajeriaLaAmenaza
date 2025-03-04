import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp",
    "/image6.webp",
    "/image7.webp",
    "/image8.webp",
    "/image9.webp",
    "/image10.webp",
    "/image11.webp",
    "/image12.webp",
    "/image13.webp",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Movimiento lento y estable
    slidesToShow: 5,
    slidesToScroll: 1, // No cambiar más de una imagen a la vez
    autoplay: true,
    autoplaySpeed: 1, // Se mantiene en constante movimiento
    arrows: false,
    cssEase: "linear", // Movimiento continuo sin pausas
    pauseOnHover: false,
    swipeToSlide: true,
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
        <h1>Cerrrajero 24hrs a domicilio manejando todas las marcas</h1>
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
