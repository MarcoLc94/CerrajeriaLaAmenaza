const CotizacionComponent = () => {
    return (
      <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas una cotización rápida?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contáctanos hoy y descubre cómo podemos ayudarte con soluciones rápidas, seguras y confiables para tus necesidades de cerrajería automotriz.
          </p>
          <button
            onClick={() => window.location.href = "/contacto"} // Cambia "/contacto" por la ruta de tu formulario de contacto
            className="bg-gray-950 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    );
  };
  
  export default CotizacionComponent;
  