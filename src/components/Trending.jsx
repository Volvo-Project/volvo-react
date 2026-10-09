import productos from "../data/productos";
import { Link } from "react-router-dom";

const idsTendencia = ["gta-6", "resident-evil-requiem", "blood-of-dawnwalker", "subnautica-2"];

const tendencias = productos.filter((producto) => idsTendencia.includes(producto.id));

function TarjetaTendencias({ id, nombre, imagen, posicion }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="item">
        <div className="thumb">
          <Link to={`/producto/${id}`}>
            <img
              src={imagen}
              alt={`Portada de ${nombre}`}
              style={{ objectPosition: posicion }}
            />
          </Link>
        </div>
        <div className="down-content">
          <h4>{nombre}</h4>
        </div>
      </div>
    </div>
  );
}

function Trending() {
  return (
    <section className="section trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>Tendencias</h6>
              <h2>Juegos en tendencia</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <Link to="/producto">Ver todos</Link>
            </div>
          </div>
          {tendencias.map((trending) => (
            <TarjetaTendencias
              key={trending.id}
              id={trending.id}
              nombre={trending.nombre}
              imagen={trending.imagen}
              posicion={trending.posicionCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
