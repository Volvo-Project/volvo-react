import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  //locura
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  function buscar(e) {
    e.preventDefault();
    const termino = texto.trim();
    navigate(
      termino ? `/producto?buscar=${encodeURIComponent(termino)}` : "/producto",
    );
  }

  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>Bienvenido a Volvo</h6>
              <h1>
                La mejor página para comprar y opinar sobre tus juegos favoritos
              </h1>
              <p>Encuentra un catalogo extendido de videojuegos</p>
              <div className="search-input">
                <form onSubmit={buscar}>
                  <input
                    type="text"
                    placeholder="Busca tu juego"
                    aria-label="Buscar juego"
                    autoComplete="off"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                  />
                  <button type="submit">Buscar ahora</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <Link to="/producto/assassins-creed">
                <img
                  src="/assets/images/assassinscreed2.jpg"
                  alt="Portada de Assassin's Creed en oferta"
                />
              </Link>
              <span className="precio">$19.990</span>
              <span className="oferta">-50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
