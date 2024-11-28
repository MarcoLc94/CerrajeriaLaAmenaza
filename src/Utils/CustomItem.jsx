import "./CustomItem.css";
import { Link } from "react-scroll";  // Importar Link desde react-scroll

function CustomItem({ title, tag, toggleSidebar }) {
  return (
    <li className="block text-white item-li">
      <Link 
        to={tag} 
        smooth={true} 
        duration={500} 
        activeClass="active"  // Agregar la clase activa
        spy={true}  // Esto asegura que el enlace se active cuando la sección está en vista
        onClick={() => toggleSidebar()} // Cierra el sidebar al hacer clic
      >
        {title}
      </Link>
    </li>
  );
}

export default CustomItem;
