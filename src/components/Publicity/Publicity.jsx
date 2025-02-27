import { useState, useEffect } from "react";
import "./PublicityComponent.css";
import { useNavigate } from "react-router-dom";

const promociones = [
  "🔑 ¡Aprovecha el 30% de descuento en todo tipo de llaves con el codigo: LLAVES25! 🔑",
  "🔥 Duplicado de llaves GRATIS en tu primera compra. 🔥",
  "🚗 Servicio de emergencia 24/7 con precios especiales. 🚗",
];

const PublicityComponent = () => {
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setIsBlackBackground((prev) => !prev);
    }, 500); // Cambio de fondo más rápido para dar efecto de parpadeo

    return () => clearInterval(bgInterval);
  }, []);

  const handlePromo = () => {
    navigate("/reservation");
  };

  return (
    <div
      className={`publicity-slider ${isBlackBackground ? "black" : "white"}`}
      onClick={handlePromo}
    >
      <div className="slider">
        <div className="slider-track">
          {[...promociones, ...promociones].map((promo, i) => (
            <p key={i} className="promo-text">
              {promo}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicityComponent;
