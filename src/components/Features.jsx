import { Link } from "react-router-dom";

const features = [
  {
    enlace: "/nosotros",
    icono: "fa-bolt",
    titulo: "Entrega inmediata",
  },
  {
    enlace: "/contacto",
    icono: "fa-headset",
    titulo: "Contáctanos",
  },
  {
    enlace: "/producto/gta-6",
    icono: "fa-star",
    titulo: "Novedades",
  },
  {
    enlace: "/blogs",
    icono: "fa-newspaper",
    titulo: "Blog",
  },
];

function TarjetaFeatures({ enlace, icono, titulo }) {
  return (
    <div className="col-lg-3 col-md-6">
      <Link to={enlace}>
        <div className="item">
          <div className="image">
            <i className={`fa-solid ${icono}`} aria-hidden="true"></i>
          </div>
          <h4>{titulo}</h4>
        </div>
      </Link>
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
