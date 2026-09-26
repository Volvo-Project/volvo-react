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
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=warframe">
                  <img
                    src="assets/images/warframe-hero.jpg"
                    alt="Portada de Warframe"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Acción</span>
                <h4>Warframe</h4>
                <a href="detalle-producto.html?id=warframe">Explorar</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=pubg-battlegrounds">
                  <img
                    src="assets/images/pubg-battlegrounds-hero.jpg"
                    alt="Portada de PUBG Battlegrounds"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Battle Royale</span>
                <h4>PUBG Battlegrounds</h4>
                <a href="detalle-producto.html?id=pubg-battlegrounds">
                  Explorar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=rocket-league">
                  <img
                    src="assets/images/rocket-league-hero.jpg"
                    alt="Portada de Rocket League"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Deportes</span>
                <h4>Rocket League</h4>
                <a href="detalle-producto.html?id=rocket-league">Explorar</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=dead-by-daylight">
                  <img
                    src="assets/images/dead-by-daylight-hero.jpg"
                    alt="Portada de Dead by Daylight"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Terror</span>
                <h4>Dead by Daylight</h4>
                <a href="detalle-producto.html?id=dead-by-daylight">Explorar</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=brawlhalla">
                  <img
                    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_hero.jpg"
                    alt="Portada de Brawlhalla"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Lucha</span>
                <h4>Brawlhalla</h4>
                <a href="detalle-producto.html?id=brawlhalla">Explorar</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=hollow-knight">
                  <img
                    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/library_hero.jpg"
                    alt="Portada de Hollow Knight"
                  />
                </a>
              </div>
              <div className="down-content">
                <span className="category">Metroidvania</span>
                <h4>Hollow Knight</h4>
                <a href="detalle-producto.html?id=hollow-knight">Explorar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MostPlayed;
