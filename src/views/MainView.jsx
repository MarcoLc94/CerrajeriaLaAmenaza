import SliderComponent from "../components/slider/SliderComponent";
import ValoresComponent from "../components/Valores/ValoresComponent";
import QuoteComponent from "../components/Quote/QuoteComponent";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import WhatsAppButton from "../components/Whatsbutton/WhatsappComponent";
import FormComponent from "../components/Form/FormComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import "./MainView.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const MainView = ({ setOnCatalog }) => {
  useEffect(() => {
    setOnCatalog(false);
  });

  return (
    <div className="main-container">
      <div id="/home">
        <SliderComponent />
      </div>
      <div id="/aboutus">
        <ValoresComponent />
      </div>
      <div>
        <QuoteComponent />
      </div>
      <GalleryComponent id="/services" />
      <WhatsAppButton />
      <div id="/contact">
        <FormComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

MainView.propTypes = {
  setOnCatalog: PropTypes.func.isRequired, // Verifica que sea una función requerida.
};

export default MainView;
