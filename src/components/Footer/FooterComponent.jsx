import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer-class">
      <div className="px-6 p-2">
        <div className="gap-8 flex">
          {/* Sección de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <h4>Teléfono:</h4><p className="text-gray-400">8126373570</p>
            <h4>Email:</h4><p className="text-gray-400">betito@mail.com</p>
            <h4>Dirección:</h4><p className="text-gray-400">
              Camino alas escobas 1063
              Guadalupe,NL.
            </p>
          </div>
          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-xl text-center font-semibold mb-4 ">
              Síguenos
            </h3>
            <div className="flex-col space-x-4 mb-4 flex justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social text-gray-400 hover:text-white ml-4"
              >
                <img src="/facebook-square-logo-60.png" alt="" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social text-gray-400 hover:text-white"
              >
                <img src="/instagram-alt-logo-60.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cerrjaería La Amenaza. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
