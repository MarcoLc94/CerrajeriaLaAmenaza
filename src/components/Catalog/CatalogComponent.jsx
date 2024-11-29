import "./CatalogComponent.css"; // Importar el archivo CSS

const CatalogComponent = ({ keys }) => {
  return (
    <div className="catalog-container">
      <h2 className="h2">Catálogo de Llaves</h2>
      {Object.keys(keys).map((brand) => (
        <div key={brand} className="brand-section">
          <h3 className="brand-title">{brand}</h3>
          <div className="keys-grid">
            {keys[brand].map((key, index) => (
              <div key={index} className="key-card">
                <img src={key.image} alt={key.model} className="key-image" />
                <p className="key-model">{key.model}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogComponent;
