const GalleryComponent = () => {
    const images = [
      [
        "/1140-key-fob-esp.jpg",
        "/blog-640w.webp",
        "/copia-de-llaves-de-coche-en-albacete-electrokey-03.jpg",
      ],
      [
        "/llave-nissan-02.png",
        "/llaves-auto.png",
        "/llaves-con-chip-para-autos.png",
      ],
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((column, columnIndex) => (
          <div className="grid gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img
                  className="h-auto max-w-full rounded-lg"
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
  