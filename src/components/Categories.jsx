const categorias = [
  {
    filtro: "acc",
    nombre: "Acción",
    imagen: "/assets/images/apex-legends.jpg",
  },
  {
    filtro: "avn",
    nombre: "Aventura",
    imagen: "/assets/images/lost-ark.jpg",
  },
  {
    filtro: "hor",
    nombre: "Terror",
    imagen: "/assets/images/resident-evil-requiem.jpg",
  },
  {
    filtro: "est",
    nombre: "Estrategia",
    imagen: "/assets/images/age-of-empires-4.jpg",
  },
  {
    filtro: "sim",
    nombre: "Simulación y deportes",
    imagen: "/assets/images/rocket-league.jpg",
  },
];

function TarjetaCategoria({ filtro, nombre, imagen }) {
  return (
    <div className="col-lg col-sm-6 col-xs-12">
      <div className="item">
        <div className="thumb">
          <a href={`producto.html?filtro=${filtro}`}>
            <img src={imagen} alt={`Categoría ${nombre}`} />
          </a>
          <span className="category-caption">{nombre}</span>
        </div>
      </div>
    </div>
  );
}

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
            {categorias.map((categoria) => (
              <TarjetaCategoria
                key={categoria.filtro}
                filtro={categoria.filtro}
                nombre={categoria.nombre}
                imagen={categoria.imagen}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Categories
