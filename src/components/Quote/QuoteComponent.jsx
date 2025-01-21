import "./QuoteComponent.css";
import { useNavigate } from "react-router-dom";

const CotizacionComponent = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/reservation");
  };

  return (
    <div className=" bg-gray-100 py-12 px-6 md:px-12 text-center text-custom">
      <div className="quote-square">
        <img src="/saludos.gif" alt="greetings" />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            ¿Necesitas una cotización rápida?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contáctanos hoy y descubre cómo podemos ayudarte con soluciones
            rápidas, seguras y confiables para tus necesidades de cerrajería
            automotriz.
          </p>
          <div
            onClick={handleContinue}
            className="button-custom text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Solicitar Cotización
          </div>
        </div>
      </div>
      <div className="allcards">
        <div>
          <h1>Aceptamos todas las tarjetas</h1>
        </div>
        <div className="photoinside">
          <img src="/allbrands.jpg" alt="" />
          <img src="/mercadopago.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CotizacionComponent;
