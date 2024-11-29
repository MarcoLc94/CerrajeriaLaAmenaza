import "./CustomItem.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function CustomItem({ title, tag, toggleSidebar, onCatalog }) {
  if (onCatalog || title === "Catalogo" || title === "Agendar") {
    // Caso para navegación externa o cuando el título es "Catalogo"
    return (
      <li className="block text-white item-li">
        <NavLink
          to={tag}
          className={({ isActive }) =>
            isActive ? "active" : "inactive"
          }
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

export default CustomItem;
