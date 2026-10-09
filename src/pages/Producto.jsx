import { Link, useSearchParams } from "react-router-dom";
import productos from "../data/productos";

function TarjetaCatalogo({
  id,
  nombre,
  categoria,
  imagen,
  posicion,
  precio,
  esGratis,
}) {
  return (
    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items">
      <div className="item">
        <div className="thumb">
          <Link to={`/producto/${id}`}>
            <img
              src={imagen}
              alt={`Portada de ${nombre}`}
              style={{ objectPosition: posicion }}
            />
          </Link>
          <span className="precio">
            {esGratis ? "Gratis" : `$${precio.toLocaleString("es-CL")}`}
          </span>
        </div>
        <div className="down-content">
          <span className="category">{categoria}</span>
          <h4>{nombre}</h4>
          <Link to={`/producto/${id}`}>
            <i className="fa fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Producto() {
  const [searchParams, setSearchParams] = useSearchParams();
  const busqueda = searchParams.get("buscar") ?? "";

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Nuestra Tienda</h1>
              <span className="breadcrumb">
                <Link to="/">Inicio</Link> &gt; Tienda
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="section trending">
        <div className="container">
          <h2 className="visually-hidden">Catálogo de juegos</h2>
          <div id="busqueda-info"></div>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-6">
              <input
                type="search"
                className="form-control"
                placeholder="Busca tu juego"
                aria-label="Buscar juego"
                value={busqueda}
                onChange={(e) => {
                  const texto = e.target.value;
                  setSearchParams(texto ? { buscar: texto } : {}, {
                    replace: true,
                  });
                }}
              />
            </div>
          </div>
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
          <div className="row trending-box">
            {productosFiltrados.map((producto) => (
              <TarjetaCatalogo
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                categoria={producto.categoria}
                imagen={producto.imagen}
                posicion={producto.posicionCard}
                precio={producto.precio}
                esGratis={producto.esGratis}
              />
            ))}
          </div>
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
