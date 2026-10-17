import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useSesion } from "../context/SesionContext";

function Header() {
  const [conFondo, setConFondo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { totalItems } = useCarrito();
  const { sesion, cerrarSesion } = useSesion();
  const navigate = useNavigate();

  function salir(e) {
    e.preventDefault();
    cerrarSesion();
    navigate("/");
  }

  useEffect(() => {
    function alHacerScroll() {
      const caja = document.querySelector(".header-text");
      const header = document.querySelector("header");

      if (!caja || !header) return;

      // Bajé mas q el alto del banner menos el alto del header?
      setConFondo(window.scrollY >= caja.offsetHeight - header.offsetHeight);
    }

    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll);
    //cada vez q haya algun scroll ejecuta la function
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <header
      className={`header-area header-sticky ${conFondo ? "background-header" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img
                  src="/assets/images/volvo logo.png"
                  alt="Logo volvo"
                  style={{ width: "200px" }}
                />
              </Link>
              <ul className="nav" style={menuAbierto ? { display: "block" } : undefined}
                onClick={() => setMenuAbierto(false)}>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/producto">Productos</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
                {sesion ? (
                  <li>
                    <a href="/" onClick={salir}>
                      Cerrar sesión ({sesion.nombre.split(" ")[0]})
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Iniciar sesión</Link>
                    </li>
                    <li>
                      <Link to="/registro">Registrarse</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    to="/carrito"
                    aria-label="Ver carrito de compras"
                    className="cart-link"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span
                      id="carrito-contador"
                      className="carrito-contador"
                      hidden={totalItems === 0}
                    >
                      {totalItems}
                    </span>
                  </Link>
                </li>
              </ul>
              <a
                className={`menu-trigger${menuAbierto ? " active" : ""}`}
                role="button"
                aria-label="Abrir menú"
                aria-expanded={menuAbierto}
                onClick={() => setMenuAbierto(!menuAbierto)}
              >
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
