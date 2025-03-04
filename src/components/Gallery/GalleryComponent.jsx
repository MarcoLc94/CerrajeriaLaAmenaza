import { useState } from "react";
import "./GalleryComponent.css";

const GalleryComponent = () => {
  const images = [
    ["/foto8.webp", "/foto9.webp", "/foto10.webp"],
    ["/foto11.webp", "/foto12.webp", "/foto13.webp"],
  ];

  // Estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para cerrar el modal
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="gallery-custom grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((column, columnIndex) => (
          <div className="gallery-item grid gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img
                  className="image-custom h-auto max-w-full rounded-lg cursor-pointer"
                  src={image}
                  alt={`Gallery image ${columnIndex}-${imageIndex}`}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              className="max-w-full max-h-screen rounded-lg"
              src={selectedImage}
              alt="Selected"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={(e) => {
                e.stopPropagation(); // Evitar cerrar el modal al hacer clic en el botón
                closeModal();
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryComponent;
