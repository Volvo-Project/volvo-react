import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useSesion } from "../context/SesionContext";

const dinero = (valor) => `$${valor.toLocaleString("es-CL")}`;

function Carrito() {
  const { items, total, cambiarCantidad, eliminar, vaciar } = useCarrito();
  const { sesion } = useSesion();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(null);

  function finalizarCompra() {
    if (items.length === 0) {
      setMensaje({ tipo: "avisoerror", texto: "No tiene productos para comprar" });
      return;
    }
    if (!sesion) {
      // Sin sesión no se puede comprar: va al login y después vuelve al carrito.
      navigate("/login", {
        state: { volverA: "/carrito", motivo: "Inicia sesión para finalizar tu compra" },
      });
      return;
    }
    vaciar();
    setMensaje({ tipo: "aviso", texto: "Gracias por tu compra" });
  }

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Carrito de Compras</h1>
              <span className="breadcrumb">
                <Link to="/">Inicio</Link> &gt; Carrito
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ padding: "60px 0" }}>
        <div className="container">
          {items.length === 0 ? (
            <p>
              Tu carrito está vacío. <Link to="/producto">Ver juegos</Link>
            </p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.precio === 0 ? "Gratis" : dinero(item.precio)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          aria-label={`Restar uno a ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.id, -1)}
                        >
                          -
                        </button>{" "}
                        <span>{item.cantidad}</span>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          aria-label={`Sumar uno a ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>{dinero(item.precio * item.cantidad)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => eliminar(item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h4>Total: {dinero(total)}</h4>

          <button type="button" className="btn btn-secondary me-2" onClick={vaciar}>
            Vaciar carrito
          </button>
          <button type="button" className="btn btn-primary" onClick={finalizarCompra}>
            Finalizar compra
          </button>
          {mensaje && <p className={mensaje.tipo}>{mensaje.texto}</p>}
        </div>
      </div>
    </>
  );
}

export default Carrito;
