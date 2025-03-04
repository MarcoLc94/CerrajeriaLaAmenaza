import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer-class">
      <div className="footer2 px-6 p-2">
        <div className="footer3 gap-8 flex">
          {/* Sección de Contacto */}
          <div className="footer4">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <h4>Teléfono:</h4>
            <p className="text-gray-400">8126373570</p>
            <h4>Email:</h4>
            <p className="text-gray-400">autocerrajeriamx@gmail.com</p>
            <h4>Dirección:</h4>
            <p className="text-gray-400">
              Camino a las escobas 1063 Guadalupe,NL.
            </p>
          </div>
          {/* Sección de Redes Sociales */}
          <div className="footer4">
            <h3 className="text-xl text-center font-semibold mb-4 ">
              Síguenos
            </h3>
            <div className="footer5 flex-col space-x-4 mb-4 flex justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=100055075004360&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social text-gray-400 hover:text-white ml-4"
              >
                <img src="/facebook-square.webp" alt="" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social text-gray-400 hover:text-white"
              >
                <img src="/instagram-alt-logo-60.webp" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Autocerrajeria. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
