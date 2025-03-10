import { useEffect, useState } from "react";
import "./NavBar.css";
import CustomItem from "../../Utils/CustomItem";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PublicityComponent from "../Publicity/Publicity";

const NavBar = ({ onCatalog, setOnCatalog }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [icon, setIcon] = useState(true);
  const location = useLocation();

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
    setOnCatalog(false);
  }, [setOnCatalog, location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const titles = [
    { title: "Inicio", tag: "/home" },
    { title: "Contacto", tag: "/contact" },
    { title: "Catalogo", tag: "/catalog" },
    { title: "Agendar", tag: "/reservation" },
  ];

  return (
    <div className={onCatalog ? "master-nav" : ""}>
      <nav
        className={
          scroll
            ? "nav-gradient dark:bg-gray-900 fixed w-full z-50 top-0 start-0 dark:border-gray-600"
            : "navbar dark:bg-gray-900 fixed w-full z-50 top-0 start-0 dark:border-gray-600"
        }
      >
        <PublicityComponent />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2">
            <div>
              <img
                src="/car-mechanic-solid-60 (1).webp"
                alt="icono-principal"
                style={{ width: "30px" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="custom-title self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                Auto Cerrajeria
              </span>
              <h3 className="text-white small">📞8126373570</h3>
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
          <ul className="flex flex-col justify-center items-center space-y-10 pb-28">
            {titles.map((title, index) => (
              <CustomItem
                key={index}
                title={title.title}
                tag={title.tag}
                toggleSidebar={toggleSidebar}
                isActive={location.pathname === title.tag}
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
  );
};

NavBar.propTypes = {
  onCatalog: PropTypes.bool.isRequired,
  setOnCatalog: PropTypes.func.isRequired,
};

export default NavBar;
