import "./FooterComponent.css"

const FooterComponent = () => {
  return (
    <footer className="footer-class">
      <div className="px-6 p-2">
        <div className="gap-8">
          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400">Teléfono: (123) 456-7890</p>
            <p className="text-gray-400">Email: contacto@empresa.com</p>
            <p className="text-gray-400">Dirección: Calle Ejemplo 123, Ciudad, País</p>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} [Nombre de tu Empresa]. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
