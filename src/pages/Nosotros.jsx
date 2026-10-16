const EQUIPO = [
  { nombre: "Nicolás Olivares", rol: "Desarrollador Frontend y Backend" },
  { nombre: "Matías Rodríguez", rol: "Desarrollador Frontend y Backend" },
  { nombre: "Emiliano Cerda", rol: "Desarrollador Frontend y Backend" },
];

function Nosotros() {
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Nosotros</h1>
              <span>Conoce la historia de Volvo y al equipo que desarrolla la tienda</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <section className="mb-4">
          <h2>Sobre Volvo</h2>
          <p>
            Volvo es una tienda online de videojuegos digitales enfocada en vender videojuegos a
            buen precio y un lugar donde puedes opinar sobre tus juegos favoritos y compartir con
            la comunidad.
          </p>
        </section>

        <section className="mb-4">
          <h2>Nuestra historia</h2>
          <p>
            Volvo nació en 2026 como un proyecto de nuestra carrera de Ingeniería en Informática.
          </p>
        </section>

        <section>
          <h2>El equipo</h2>
          <ul>
            {EQUIPO.map((persona) => (
              <li key={persona.nombre}>
                {persona.nombre} — {persona.rol}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Nosotros;
