import { Link, useParams } from "react-router-dom";
import productos from "../data/productos";

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <div className="container section">
        <h2>Producto no encontrado</h2>
        <Link to="/producto">Volver a la tienda</Link>
      </div>
    );
  }
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{producto.nombre}</h1>
              <span className="breadcrumb">
                <Link to="/">Inicio</Link> &gt;{" "}
                <Link to="/producto">Tienda</Link> &gt;{" "}
                <span>{producto.nombre}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img
                  src={producto.imagenDetalle}
                  alt={`Portada de ${producto.nombre}`}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>{producto.nombre}</h4>
              <span className="price">
                {producto.esGratis ? "Gratis" : `$${producto.precio.toLocaleString("es-CL")}`}
              </span>
              <p>{producto.descripcion}</p>
              <form noValidate>
                <label htmlFor="cantidad" className="visually-hidden">
                  Cantidad a comprar
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cantidad"
                  name="cantidad"
                  defaultValue="1"
                  min="1"
                  step="1"
                  placeholder="1"
                />
                <button type="submit">
                  <i className="fa fa-shopping-bag"></i> AGREGAR AL CARRITO
                </button>
              </form>
              <p className="aviso" hidden></p>
              <ul>
                <li>
                  <span>ID del Juego:</span>{" "}
                  <span>{producto.idJuego}</span>
                </li>
                <li>
                  <span>Género:</span>{" "}
                  <span>{producto.genero}</span>
                </li>
                <li>
                  <span>Etiquetas:</span>{" "}
                  <span>{producto.etiquetas}</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleProducto;
