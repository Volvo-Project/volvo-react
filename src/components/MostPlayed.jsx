import productos from "../data/productos";
import { Link } from "react-router-dom";
const idsMasJugados = [
  "warframe",
  "pubg-battlegrounds",
  "rocket-league",
  "dead-by-daylight",
  "brawlhalla",
  "hollow-knight",
];

const masJugados = productos.filter((producto) =>
  idsMasJugados.includes(producto.id),
);

function TarjetaJuego({ id, nombre, categoria, imagen }) {
  return (
    <div className="col-lg-2 col-md-6 col-sm-6">
      <div className="item">
        <div className="thumb">
          <a href={`detalle-producto.html?id=${id}`}>
            <img src={imagen} alt={`Portada de ${nombre}`} />
          </a>
        </div>
        <div className="down-content">
          <span className="category">{categoria}</span>
          <h4>{nombre}</h4>
          <a href={`detalle-producto.html?id=${id}`}>Explorar</a>
        </div>
      </div>
    </div>
  );
}

function MostPlayed() {
  return (
    <section className="section most-played">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>LO MÁS TOP</h6>
              <h2>Más Jugados</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <Link to="/producto">Ver Todos</Link>
            </div>
          </div>
          {masJugados.map((juego) => (
            <TarjetaJuego
              key={juego.id}
              id={juego.id}
              nombre={juego.nombre}
              categoria={juego.categoria}
              imagen={juego.imagenHero}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostPlayed;
