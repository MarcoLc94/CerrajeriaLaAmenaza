import  { useState } from "react";

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-gray-200 dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2">
            <div>
              <box-icon
                name="car-mechanic"
                type="solid"
                color="#000000"
                size="40px"
              ></box-icon>
            </div>
            <div className="flex flex-col">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                Auto Cerrajería
              </span>
            </div>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-75 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-[90vh] mt-[10vh]">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center flex-grow space-y-8">
            <li>
              <a
                href="#"
                className="block text-xl font-semibold text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl font-semibold text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl font-semibold text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl font-semibold text-white hover:text-blue-700 dark:hover:text-blue-500"
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="p-4">
            <span className="text-white">
              © 2024 Auto Cerrajería
            </span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
