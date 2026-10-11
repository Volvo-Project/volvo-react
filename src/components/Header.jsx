import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [conFondo, setConFondo] = useState(false);

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
              <ul className="nav">
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
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
                <li>
                  <Link to="/registro">Registrarse</Link>
                </li>
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
                      hidden
                    >
                      0
                    </span>
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
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
