function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Categorías</h6>
              <h2>Categorías Principales</h2>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <div className="thumb">
                <a href="producto.html?filtro=acc">
                  <img
                    src="assets/images/apex-legends.jpg"
                    alt="Categoría Acción"
                  />
                </a>
                <span className="category-caption">Acción</span>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <div className="thumb">
                <a href="producto.html?filtro=avn">
                  <img
                    src="assets/images/lost-ark.jpg"
                    alt="Categoría Aventura"
                  />
                </a>
                <span className="category-caption">Aventura</span>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <div className="thumb">
                <a href="producto.html?filtro=hor">
                  <img
                    src="assets/images/resident-evil-requiem.jpg"
                    alt="Categoría Terror"
                  />
                </a>
                <span className="category-caption">Terror</span>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <div className="thumb">
                <a href="producto.html?filtro=est">
                  <img
                    src="assets/images/age-of-empires-4.jpg"
                    alt="Categoría Estrategia"
                  />
                </a>
                <span className="category-caption">Estrategia</span>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <div className="thumb">
                <a href="producto.html?filtro=sim">
                  <img
                    src="assets/images/rocket-league.jpg"
                    alt="Categoría Simulación y deportes"
                  />
                </a>
                <span className="category-caption">Simulación y deportes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
