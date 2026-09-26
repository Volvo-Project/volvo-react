function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <a href="nosotros.html">
              <div className="item">
                <div className="image">
                  <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                </div>
                <h4>Entrega inmediata</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="contacto.html">
              <div className="item">
                <div className="image">
                  <i className="fa-solid fa-headset" aria-hidden="true"></i>
                </div>
                <h4>Contáctanos</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="detalle-producto.html?id=gta-6">
              <div className="item">
                <div className="image">
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                </div>
                <h4>Novedades</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="blogs.html">
              <div className="item">
                <div className="image">
                  <i className="fa-solid fa-newspaper" aria-hidden="true"></i>
                </div>
                <h4>Blog</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
