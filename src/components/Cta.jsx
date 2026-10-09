import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="shop">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h6>Nuestra Tienda</h6>
                    <h2>
                      ¡Haz tu Pre-Compra y Obtén los Mejores <em>Precios</em>{" "}
                      para Ti!
                    </h2>
                  </div>
                  <p>
                    Reserva tus juegos favoritos con anticipación y accede a
                    descuentos exclusivos por tiempo limitado.
                  </p>
                  <div className="main-button">
                    <Link to="/producto">Comprar Ahora</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 align-self-end">
            <div className="subscribe">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h6>NEWSLETTER</h6>
                    <h2>
                      Obtén un 10% de Descuento en tu Primera Compra al{" "}
                      <em>Suscribirte</em> a Nuestro Newsletter!
                    </h2>
                  </div>
                  <div className="search-input">
                    <form id="subscribe" action="#" noValidate>
                      <label
                        htmlFor="exampleInputEmail1"
                        className="visually-hidden"
                      >
                        Correo para el newsletter
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="correoNewsletter"
                        autoComplete="email"
                        placeholder="ejemplo@duoc.cl"
                        required
                      />
                      <button type="submit">Suscribirme Ahora</button>
                    </form>
                    <p id="subscribe-aviso" className="aviso" hidden></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta
