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
              <a href="producto.html">Ver todos</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=gta-6">
                  <img
                    src="assets/images/gta6.jpg"
                    alt="Portada de Grand Theft Auto VI"
                  />
                </a>
              </div>
              <div className="down-content">
                <h4>Reserva GTA 6</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=resident-evil-requiem">
                  <img
                    src="assets/images/resident-evil-requiem.jpg"
                    alt="Portada de Resident Evil Requiem"
                  />
                </a>
              </div>
              <div className="down-content">
                <h4>Resident Evil Requiem</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=blood-of-dawnwalker">
                  <img
                    src="assets/images/blood-of-dawnwalker.jpg"
                    alt="Portada de The Blood of Dawnwalker"
                    style={{ objectPosition: "35% center" }}
                  />
                </a>
              </div>
              <div className="down-content">
                <h4>The Blood of Dawnwalker</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="detalle-producto.html?id=subnautica-2">
                  <img
                    src="assets/images/subnautica2.jpg"
                    alt="Portada de Subnautica 2"
                  />
                </a>
              </div>
              <div className="down-content">
                <h4>Subnautica 2</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
