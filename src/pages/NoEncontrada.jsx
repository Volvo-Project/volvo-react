import { Link } from "react-router-dom";

// Página que se muestra cuando la dirección no coincide con ninguna ruta de App.jsx.
// Usa la misma estructura que "Producto no encontrado" (DetalleProducto.jsx:13-28).
function NoEncontrada() {
  return (
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Página no encontrada</h1>
            <p>La dirección que escribiste no existe o fue cambiada.</p>
            <span className="breadcrumb">
              <Link to="/">Volver al inicio</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoEncontrada;