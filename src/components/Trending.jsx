const tendencia = [
  {
    id: "gta-6",
    titulo: "Reserva GTA 6",
    nombre: "Grand Theft Auto VI",
    imagen: "assets/images/gta6.jpg",
  },
  {
    id: "resident-evil-requiem",
    titulo: "Resident Evil Requiem",
    nombre: "Resident Evil Requiem",
    imagen: "assets/images/resident-evil-requiem.jpg",
  },
  {
    id: "blood-of-dawnwalker",
    titulo: "The Blood of Dawnwalker",
    nombre: "The Blood of Dawnwalker",
    imagen: "assets/images/blood-of-dawnwalker.jpg",
    posicion: "35% center"
  },
  {
    id: "subnautica-2",
    titulo: "Subnautica 2",
    nombre: "Subnautica 2",
    imagen: "assets/images/subnautica2.jpg",
  },
];

function TarjetaTendencias({ id, titulo, nombre, imagen, posicion }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="item">
        <div className="thumb">
          <a href={`detalle-producto.html?id=${id}`}>
            <img
              src={imagen}
              alt={`Portada de ${nombre}`}
              style={{ objectPosition: posicion }}
            />
          </a>
        </div>
        <div className="down-content">
          <h4>{`${titulo}`}</h4>
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
              <a href="producto.html">Ver Todos</a>
            </div>
          </div>
          {tendencia.map((trending) => (
            <TarjetaTendencias
              key={trending.id}
              id = {trending.id}
              titulo={trending.titulo}
              nombre={trending.nombre}
              imagen={trending.imagen}
              posicion = {trending.posicion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
