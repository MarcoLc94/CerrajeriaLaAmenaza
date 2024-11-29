import SliderComponent from "../components/slider/SliderComponent";
import ValoresComponent from "../components/Valores/ValoresComponent";
import QuoteComponent from "../components/Quote/QuoteComponent";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import WhatsAppButton from "../components/Whatsbutton/WhatsappComponent";
import FormComponent from "../components/Form/FormComponent";
import FooterComponent from "../components/Footer/FooterComponent";
import "./MainView.css";
import { useEffect } from "react";


const MainView = ({onCatalog, setOnCatalog}) => {
  
  useEffect(() => {
   setOnCatalog(false)
  }, [])
  

  return (
    <div className="main-container">
      <div id="/home">
        <SliderComponent />
      </div>
      <div id="/aboutus">
        <ValoresComponent />
      </div>
      <div id="/services">
        <QuoteComponent />
      </div>
      <GalleryComponent />
      <WhatsAppButton />
      <div id="/contact">
        <FormComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default MainView;
