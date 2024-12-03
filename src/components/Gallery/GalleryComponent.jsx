import "./GalleryComponent.css"

const GalleryComponent = () => {
  const images = [
    [
      "/foto8.jpeg",
      "/foto9.jpeg",
      "/foto10.jpeg",
    ],
    [
      "/foto11.jpeg",
      "/foto12.jpeg",
      "/foto13.jpeg",
    ],
  ];
  
  
    return (
      <div className="gallery-custom grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((column, columnIndex) => (
          <div className="gallery-item grid gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img
                  className="image-custom h-auto max-w-full rounded-lg"
                  src={image}
                  alt={`Gallery image ${columnIndex}-${imageIndex}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default GalleryComponent;
  