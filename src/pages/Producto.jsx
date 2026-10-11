import { Link, useSearchParams } from "react-router-dom";
import productos from "../data/productos";

const CATEGORIAS = [
  ["", "Ver Todo"],
  ["acc", "Acción"],
  ["avn", "Aventura"],
  ["hor", "Terror"],
  ["est", "Estrategia"],
  ["sim", "Simulación y deportes"],
];

const productosPorPagina = 8;

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
  const filtro = searchParams.get("filtro") ?? "";
  const paginaSolicitada = Number.parseInt(searchParams.get("pagina") ?? "1", 10);

  // Un juego se muestra si coincide con la búsqueda Y con la categoría elegida.
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtro === "" || producto.filtro === filtro),
  );
  const totalPaginas = Math.max(1, Math.ceil(productosFiltrados.length / productosPorPagina));
  const paginaActual = Math.min(Math.max(Number.isNaN(paginaSolicitada) ? 1 : paginaSolicitada, 1), totalPaginas);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosDePagina = productosFiltrados.slice(inicio, inicio + productosPorPagina);

  // Arma el link de cada categoría conservando lo que se escribió en el buscador.
  function enlaceFiltro(codigo) {
    const params = new URLSearchParams();
    if (busqueda) params.set("buscar", busqueda);
    if (codigo) params.set("filtro", codigo);
    const texto = params.toString();
    return texto ? `/producto?${texto}` : "/producto";
  }

  // Arma el link de cada página conservando la búsqueda y la categoría.
  function enlacePagina(numero) {
    const params = new URLSearchParams();
    if (busqueda) params.set("buscar", busqueda);
    if (filtro) params.set("filtro", filtro);
    if (numero > 1) params.set("pagina", numero);

    const texto = params.toString();
    return texto ? `/producto?${texto}` : "/producto";
  }

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
                  const params = {};
                  if (texto) params.buscar = texto;
                  if (filtro) params.filtro = filtro;
                  setSearchParams(params, { replace: true });
                }}
              />
            </div>
          </div>
          <ul className="trending-filter">
            {CATEGORIAS.map(([codigo, texto]) => (
              <li key={codigo}>
                <Link
                  className={filtro === codigo ? "is_active" : ""}
                  to={enlaceFiltro(codigo)}
                >
                  {texto}
                </Link>
              </li>
            ))}
          </ul>
          <div className="row trending-box">
            {productosDePagina.map((producto) => (
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
              >
                <li>
                  <Link to={enlacePagina(Math.max(1, paginaActual - 1))}>&lt;</Link>
                </li>
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
                  <li key={numero}>
                    <Link
                      to={enlacePagina(numero)}
                      className={numero === paginaActual ? "is_active" : ""}
                    >
                      {numero}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={enlacePagina(Math.min(totalPaginas, paginaActual + 1))}>&gt;</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Producto;
