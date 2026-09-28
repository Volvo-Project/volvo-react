const features = [
  {
    enlace: "nosotros.html",
    icono: "fa-bolt",
    titulo: "Entrega inmediata",
  },
  {
    enlace: "contacto.html",
    icono: "fa-headset",
    titulo: "Contáctanos",
  },
  {
    enlace: "detalle-producto.html?id=gta-6",
    icono: "fa-star",
    titulo: "Novedades",
  },
  {
    enlace: "blogs.html",
    icono: "fa-newspaper",
    titulo: "Blog",
  },
];

function TarjetaFeatures({ enlace, icono, titulo }) {
  return (
    <div className="col-lg-3 col-md-6">
      <a href={enlace}>
        <div className="item">
          <div className="image">
            <i className={`fa-solid ${icono}`} aria-hidden="true"></i>
          </div>
          <h4>{titulo}</h4>
        </div>
      </a>
    </div>
  );
}

function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          {features.map((feature) => (
            <TarjetaFeatures
              key={feature.enlace}
              enlace={feature.enlace}
              icono={feature.icono}
              titulo={feature.titulo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
