import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import SliderComponent from "./components/slider/SliderComponent";
import MainComponent from "./components/Main/MainComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import ValoresComponent from "./components/Valores/ValoresComponent";
import QuoteComponent from "./components/Quote/QuoteComponent";
import GalleryComponent from "./components/Gallery/GalleryComponent";
import WhatsAppButton from "./components/Whatsbutton/WhatsappComponent";
import FormComponent from "./components/Form/FormComponent";

const App = () => {
  return (
    <div className="cover">
      {/* Aqui va primero el navbar  */}
      <NavBar />
      <SliderComponent />
      <div className="main-container">
        <MainComponent />
      </div>
        <ValoresComponent/>
        <QuoteComponent/>
        <GalleryComponent/>
        <WhatsAppButton/>
        <FormComponent/>
      <FooterComponent />
      {/* Aqui van las rutas de la web para la SPA */}
      <Routes>
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
