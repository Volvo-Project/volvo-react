import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Producto from "./pages/Producto.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
