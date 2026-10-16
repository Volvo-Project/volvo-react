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
          <div className="cart-layout">
            {/* Columna izquierda: una tarjeta por producto */}
            <div className="cart-items">
              {items.length === 0 ? (
                <div className="carrito-vacio">
                  <p>Tu carrito está vacío.</p>
                  <Link to="/producto">Ver juegos</Link>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-thumb">
                      {item.imagen ? (
                        <img src={item.imagen} alt="" />
                      ) : (
                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                      )}
                    </div>

                    <div className="cart-item-info">
                      <p className="cart-item-nombre">{item.nombre}</p>
                      <div className="cart-item-cantidad">
                        <button
                          type="button"
                          aria-label={`Restar uno a ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.cantidad}</span>
                        <button
                          type="button"
                          aria-label={`Sumar uno a ${item.nombre}`}
                          onClick={() => cambiarCantidad(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button type="button" className="btn-eliminar" onClick={() => eliminar(item.id)}>
                        Eliminar
                      </button>
                    </div>

                    <div className="cart-item-precio">
                      <strong>{dinero(item.precio * item.cantidad)}</strong>
                      <span className="cart-item-preciounit">{dinero(item.precio)} c/u</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Columna derecha: resumen del pedido */}
            <aside className="cart-summary" aria-label="Resumen del pedido">
              <p className="cart-summary-titulo">Resumen del pedido</p>
              <div className="cart-summary-total">
                <span>Total</span>
                <strong>{dinero(total)}</strong>
              </div>
              <p className="cart-summary-nota">
                Los impuestos, si aplican, se calculan al finalizar la compra.
              </p>
              <button type="button" className="btn-finalizar" onClick={finalizarCompra}>
                Finalizar compra
              </button>
              <button type="button" className="btn-vaciar" onClick={vaciar}>
                Vaciar carrito
              </button>
              {mensaje && <p className={mensaje.tipo}>{mensaje.texto}</p>}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrito;
