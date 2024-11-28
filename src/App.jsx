import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainView from "./views/MainView"
import NavBar from "./components/NavBar/NavBar";


const App = () => {
  return (
    <div className="cover">
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="home" element={<MainView />} />
          <Route path="*" element={<Navigate to="home"/>}/>
          <Route />
        </Routes>
      </main>
    </div>
  );
};

export default App;
