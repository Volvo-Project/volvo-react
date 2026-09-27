const juegos = [
  {
    id: "warframe",
    nombre: "Warframe",
    categoria: "Acción",
    imagen: "assets/images/warframe-hero.jpg",
  },
  {
    id: "pubg-battlegrounds",
    nombre: "PUBG Battlegrounds",
    categoria: "Battle Royale",
    imagen: "assets/images/pubg-battlegrounds-hero.jpg",
  },
  {
    id: "rocket-league",
    nombre: "Rocket League",
    categoria: "Deportes",
    imagen: "assets/images/rocket-league-hero.jpg",
  },
  {
    id: "dead-by-daylight",
    nombre: "Dead by Daylight",
    categoria: "Terror",
    imagen: "assets/images/dead-by-daylight-hero.jpg",
  },
  {
    id: "brawlhalla",
    nombre: "Brawlhalla",
    categoria: "Lucha",
    imagen:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_hero.jpg",
  },
  {
    id: "hollow-knight",
    nombre: "Hollow Knight",
    categoria: "Metroidvania",
    imagen:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/library_hero.jpg",
  },
];

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
              <a href="producto.html">Ver todos</a>
            </div>
          </div>
          {juegos.map((juego) => (
            <TarjetaJuego
              key={juego.id}
              id={juego.id}
              nombre={juego.nombre}
              categoria={juego.categoria}
              imagen={juego.imagen}    
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default MostPlayed;
