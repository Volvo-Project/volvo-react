import { useState } from "react";
import { Link } from "react-router-dom";
import { validarContacto } from "../utils/validarContacto";

const VACIO = { nombre: "", correo: "", comentario: "" };

function Contacto() {
  // Estado 1: lo que el usuario va escribiendo.
  const [valores, setValores] = useState(VACIO);
  // Estado 2: qué campos ya "tocó" (salió de ellos), para no mostrar errores antes de tiempo.
  const [tocados, setTocados] = useState({});
  // Estado 3: si ya intentó enviar (entonces se muestran todos los errores).
  const [intentoEnvio, setIntentoEnvio] = useState(false);
  // Estado 4: aviso de éxito.
  const [enviado, setEnviado] = useState(false);

  // Los errores NO son estado: se calculan en cada render a partir de los valores.
  // Así la validación es en tiempo real y nunca queda desactualizada.
  const errores = validarContacto(valores);
  const mostrarError = (campo) => (tocados[campo] || intentoEnvio) && errores[campo];

  function manejarCambio(e) {
    const { name, value } = e.target;
    setValores((actual) => ({ ...actual, [name]: value }));
    setEnviado(false);
  }

  function manejarBlur(e) {
    const { name } = e.target;
    setTocados((actual) => ({ ...actual, [name]: true }));
  }

  function manejarSubmit(e) {
    e.preventDefault(); // evita que el form recargue la página
    setIntentoEnvio(true);
    if (Object.keys(errores).length > 0) {
      return;
    }
    // Aquí iría el envío al backend; por ahora solo confirmamos y limpiamos.
    setEnviado(true);
    setValores(VACIO);
    setTocados({});
    setIntentoEnvio(false);
  }

  function campo(nombre, etiqueta, props = {}) {
    const error = mostrarError(nombre);
    const Elemento = props.as ?? "input";
    return (
      <div className="mb-3">
        <label htmlFor={nombre} className="form-label">
          {etiqueta}
        </label>
        <Elemento
          id={nombre}
          name={nombre}
          className={`form-control${error ? " is-invalid" : ""}`}
          value={valores[nombre]}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`error-${nombre}`}
          {...props.atributos}
        />
        <span className="error text-danger small" id={`error-${nombre}`}>
          {error || ""}
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contacto</h1>
              <span className="breadcrumb">
                <Link to="/">Inicio</Link> &gt; Contacto
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 d-flex justify-content-center">
        <form
          noValidate
          onSubmit={manejarSubmit}
          className="p-4 shadow rounded"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          {campo("nombre", "Nombre", {
            atributos: { type: "text", maxLength: 100, placeholder: "Ingrese su nombre" },
          })}
          {campo("correo", "Correo", {
            atributos: { type: "email", maxLength: 100, placeholder: "Ingrese su correo" },
          })}
          {campo("comentario", "Comentario", {
            as: "textarea",
            atributos: { rows: 5, maxLength: 500, placeholder: "Escribe tu comentario" },
          })}
          <p className="small text-muted text-end" aria-live="polite">
            {valores.comentario.length}/500
          </p>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
          {enviado && (
            <p className="aviso mt-3 text-center" role="status">
              Mensaje enviado correctamente
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Contacto;
