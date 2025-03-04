import { useEffect, useState } from "react";
import CustomItem from "../Utils/CustomItem";
import CatalogComponent from "../components/Catalog/CatalogComponent";
import PropTypes from "prop-types";

const CatalogView = ({ onCatalog, setOnCatalog }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const toggleSidebar = () => {
    handleIcon();
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setOnCatalog(true);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const titles = [
    { title: "Regresar", tag: "/home" },
    { title: "Agendar", tag: "/reservation" },
  ];

  const keysData = {
    "Llaves Convencionales": [
      {
        name: "Llave de Puerta",
        description: "Llave estándar para abrir puertas de automóviles.",
        image: "/convencional-key.webp",
      },
      {
        name: "Llave de Encendido",
        description:
          "Llave metálica utilizada para arrancar vehículos más antiguos.",
        image: "/encendido-key.webp",
      },
    ],
    "Llaves Electrónicas": [
      {
        name: "Llave Transponder",
        description: "Llave con chip que proporciona mayor seguridad.",
        image: "/transponder-key.webp",
      },
      {
        name: "Llave de Mando a Distancia",
        description: "Permite abrir y cerrar el coche de forma remota.",
        image: "/remote-key.webp",
      },
    ],
    "Llaves Especializadas": [
      {
        name: "Llave Valet",
        description: "Llave limitada para valet parking o servicios similares.",
        image: "/valet-key.webp",
      },
      {
        name: "Llave Inteligente",
        description:
          "Llave con tecnología de proximidad para abrir y arrancar el coche.",
        image: "/smart-key.webp",
      },
    ],
  };

  return (
    <div>
      <div className={onCatalog ? "" : "master-nav"}>
        <nav
          className={
            scroll
              ? "nav-gradient dark:bg-gray-900 fixed w-full z-50 top-0 start-0 dark:border-gray-600"
              : "navbar dark:bg-gray-900 fixed w-full z-50 top-0 start-0 dark:border-gray-600"
          }
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex gap-2">
              <div>
                <img
                  src="/car-mechanic-solid-60 (1).webp"
                  alt="main_logo"
                  style={{ width: "30px" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="custom-title self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                  Auto Cerrajeria
                </span>
              </div>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={toggleSidebar}
                type="button"
                className="button-menu inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <img
                  className={`icon-transition ${icon ? "visible" : ""}`}
                  src="/menu-regular-60.webp"
                  alt="Menu Icon"
                />
                <img
                  className={`icon-transition ${!icon ? "visible" : ""}`}
                  src="/key-icon.webp"
                  alt="Key Icon"
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <div
          className={`sidebar fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 z-40 transform transition-transform duration-300 mb-8 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="sidebar-content flex flex-col justify-between h-[90vh] mt-[10vh]">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                className=" text-white button-close"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center flex-grow space-y-8 pb-32">
              {titles.map((title, index) => (
                <CustomItem
                  key={index}
                  title={title.title}
                  tag={title.tag}
                  toggleSidebar={toggleSidebar}
                  onCatalog={onCatalog}
                />
              ))}
            </ul>
            <div className="p-4">
              <span className="text-white">© 2024 Auto Cerrajería</span>
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
      <CatalogComponent keys={keysData} />
    </div>
  );
};

CatalogView.propTypes = {
  onCatalog: PropTypes.bool.isRequired,
  setOnCatalog: PropTypes.func.isRequired,
};

export default CatalogView;
