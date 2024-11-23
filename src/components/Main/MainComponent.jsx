import "./MainComponent.css"

const MainComponent = () => {
  return (
    <div className="h-[15vh] w-[100vw]">
      <img src="/banner-key-car.png" alt="" className="w-full h-[15vh]" />
      <section className="bg-gray-950">
        <h1 className="text-white text-center p-10 font-semibold text-3xl">
          Servicios de Duplicado y Programación de Llaves para Vehículos
        </h1>
        <div className="h-[40vh] p-10 icontext">
          <div>
            <img src="/car-89_256.gif" alt="" />
          </div>
          <div>
            <h3 className="text-white text-justify">
            En [Nombre de tu Empresa], somos expertos en soluciones de cerrajería automotriz, ofreciendo un servicio rápido, seguro y de alta calidad para la venta de duplicados de llaves y la programación de nuevas llaves para vehículos. Ya sea que hayas perdido tus llaves, necesites un duplicado o desees programar una nueva llave para tu coche, nuestro equipo de profesionales está listo para ayudarte.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
