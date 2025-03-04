import "./CustomItem.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function CustomItem({ title, tag, toggleSidebar, onCatalog, isActive }) {
  if (onCatalog || title === "Catalogo" || title === "Agendar") {
    // Caso para navegación externa o cuando el título es "Catalogo"
    return (
      <li className="block  item-li">
        <NavLink
          to={tag}
          className={`text-white ${
            isActive ? "text-blue-500 font-bold" : "text-gray-400"
          }`}
          onClick={toggleSidebar}
        >
          {title}
        </NavLink>
      </li>
    );
  }

  // Caso para navegación interna con react-scroll
  return (
    <li className="block text-white item-li">
      <Link
        to={tag}
        smooth={true}
        duration={500}
        activeClass="active"
        spy={true}
        onClick={toggleSidebar}
      >
        {title}
      </Link>
    </li>
  );
}

CustomItem.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  onCatalog: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default CustomItem;
