import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogComponent.css"; // Importar el archivo CSS

const CatalogComponent = ({ keys }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleQuoteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleContinue = () => {
    setShowConfirmationModal(false);
    navigate("/reservation");
  };

  return (
    <div className="catalog-container">
      <h2 className="h2">Catálogo de Tipos de Llaves</h2>
      {Object.keys(keys).map((type) => (
        <div key={type} className="type-section">
          <h3 className="type-title">{type}</h3>
          <div className="keys-grid">
            {keys[type].map((key, index) => (
              <div key={index} className="key-card">
                <img
                  src={key.image}
                  alt={key.name}
                  className="key-image"
                  onClick={() => handleImageClick(key.image)}
                />
                <p className="key-name">{key.name}</p>
                <p className="key-description">{key.description}</p>
                <button className="quote-button" onClick={handleQuoteClick}>
                  Cotizar
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal para la imagen seleccionada */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Llave seleccionada" />
            <button className="close-button" onClick={closeImageModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal para confirmación de cotización */}
      {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¡Gracias por confiar en nosotros!</h3>
            <p>
              Nuestro personal estará listo para atenderle. Por favor, déjenos
              sus datos para contactarle.
            </p>
            <button className="quote-button" onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogComponent;
