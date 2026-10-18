import { useState } from "react";
import { validarCorreo } from "../utils/validaciones";
import { Link } from "react-router-dom";


function Cta() {
  const [correo, setCorreo] = useState("");
  const [aviso, setAviso] = useState(null);
  function suscribir(e) {
    e.preventDefault();                                
    const error = validarCorreo(correo);       // devuelve el mensaje, o undefined si está bien
    if (error) {
      setAviso({ tipo: "avisoerror", texto: error });
      return;
    }
    setAviso({
      tipo: "aviso",
      texto: `¡Listo! Te suscribiste con ${correo.trim()}. Revisa tu correo por el descuento.`,
    });
    setCorreo("");                         // vacía el input, como form.reset() en volvo-web
  }
  return (
    <section className="section cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
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
          <div className="col-lg-4 offset-lg-4 align-self-end">
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
                    <form id="subscribe" noValidate onSubmit={suscribir}>
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
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        autoComplete="email"
                        placeholder="ejemplo@duoc.cl"
                        required
                      />
                      <button type="submit">Suscribirme Ahora</button>
                    </form>
                    {aviso && <p id="subscribe-aviso" className={aviso.tipo}>{aviso.texto}</p>}
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
