import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import MainView from "./views/MainView";
import NavBar from "./components/NavBar/NavBar";
import CatalogView from "./views/CatalogView";
import ReservationView from "./views/ReservationView";
import { useState } from "react";

const App = () => {
  const [onCatalog, setOnCatalog] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  return (
    <div className="cover">
      <NavBar onCatalog={onCatalog} setOnCatalog={setOnCatalog} />
      <main className="main-container">
        <TransitionGroup>
          <CSSTransition
            key={location.key} // Usamos `location.key` para asegurarnos de que se vuelva a aplicar la animación
            classNames="fade" // Clase que aplicará la animación
            timeout={300} // Tiempo que durará la transición (en milisegundos)
          >
            <Routes location={location}>
              <Route
                path="home"
                element={<MainView setOnCatalog={setOnCatalog} />}
              />
              <Route
                path="catalog"
                element={
                  <CatalogView
                    onCatalog={onCatalog}
                    setOnCatalog={setOnCatalog}
                  />
                }
              />
              <Route
                path="reservation"
                element={
                  <ReservationView
                    onCatalog={onCatalog}
                    setOnCatalog={setOnCatalog}
                  />
                }
              />
              <Route path="*" element={<Navigate to="home" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

export default App;
