import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Producto from "./pages/Producto.jsx";

function App() {
  return (
    <>
    {/*
    <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </div>
    */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/producto" element={<Producto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
