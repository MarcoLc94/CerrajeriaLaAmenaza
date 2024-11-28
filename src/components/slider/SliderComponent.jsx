import { useState, useEffect } from "react";
import "./SliderComponent.css";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/foto1.jpeg",
    "/foto2.jpeg",
    "/foto3.jpeg",
    "/foto4.jpeg",
    "/foto5.jpeg",
    "/foto6.jpeg",
    "/foto7.jpeg",
    "/foto8.jpeg",
  ];
  
  
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez cuando el componente se monta

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full h-auto"
      data-carousel="slide"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center align-middle text-white text-2xl font-bold">
        <h2 className="main-title text-center">Los mejores en auto cerrajeria.</h2>
      </div>
      {/* Carousel wrapper */}
      <div className="relative h-[60vh] overflow-hidden rounded-lg md:h-96">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out absolute inset-0`}
            data-carousel-item
          >
            <img
              src={src}
              className="img-true absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            {/* Overlay with dark background */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
