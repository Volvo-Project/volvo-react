import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [conFondo, setConFondo] = useState(false);

  useEffect(() => {
    function alHacerScroll() {
      const caja = document.querySelector(".header-text");
      const header = document.querySelector("header");

      if (!caja || !header) return;

      setConFondo(window.scrollY >= caja.offsetHeight - header.offsetHeight);
    }

    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll);

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
                  <a href="nosotros.html">Nosotros</a>
                </li>
                <li>
                  <a href="blogs.html">Blog</a>
                </li>
                <li>
                  <a href="contacto.html">Contacto</a>
                </li>
                <li>
                  <a href="login.html">Iniciar sesión</a>
                </li>
                <li>
                  <a href="registro.html">Registrarse</a>
                </li>
                <li>
                  <a
                    href="carrito.html"
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
                  </a>
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
