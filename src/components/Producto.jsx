import { Link } from "react-router-dom";

function Producto() {
  return (
    <>
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Nuestra Tienda</h1>
            <span className="breadcrumb"><Link to ="/">Inicio</Link> &gt; Tienda</span>
          </div>
        </div>
      </div>
    </div>
    <section className="section trending">
      <div className="container">
        <h2 className="visually-hidden">Catálogo de juegos</h2>
        <div id="busqueda-info"></div>
        <ul className="trending-filter">
          <li>
            <a className="is_active" href="producto.html" data-filter="*">
              Ver Todo
            </a>
          </li>
          <li>
            <a href="producto.html?filtro=acc" data-filter="acc">
              Acción
            </a>
          </li>
          <li>
            <a href="producto.html?filtro=avn" data-filter="avn">
              Aventura
            </a>
          </li>
          <li>
            <a href="producto.html?filtro=hor" data-filter="hor">
              Terror
            </a>
          </li>
          <li>
            <a href="producto.html?filtro=est" data-filter="est">
              Estrategia
            </a>
          </li>
          <li>
            <a href="producto.html?filtro=sim" data-filter="sim">
              Simulación y deportes
            </a>
          </li>
        </ul>
        <div id="catalogo-productos" className="row trending-box"></div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              id="paginacion-productos"
              className="pagination"
              aria-label="Paginación de productos"
            ></ul>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Producto;
