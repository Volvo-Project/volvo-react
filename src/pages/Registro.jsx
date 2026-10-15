import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import CampoFormulario from "../components/CampoFormulario";
import { useSesion } from "../context/SesionContext";
import { useFormulario } from "../hooks/useFormulario";
import { validarRegistro } from "../utils/validarRegistro";

const INICIAL = { nombre: "", correo: "", contrasena: "", confirmar: "" };

function Registro() {
  const { sesion, registrar } = useSesion();
  const location = useLocation();
  const form = useFormulario(INICIAL, validarRegistro);
  const [errorRegistro, setErrorRegistro] = useState("");
  const [creada, setCreada] = useState(false);

  if (sesion) {
    return <Navigate to="/" replace />;
  }

  function manejarSubmit(e) {
    e.preventDefault();
    if (!form.intentarEnvio()) return;
    const { nombre, correo, contrasena } = form.valores;
    const resultado = registrar({ nombre, correo, contrasena });
    if (!resultado.ok) {
      setErrorRegistro(resultado.error);
      setCreada(false);
      return;
    }
    setErrorRegistro("");
    setCreada(true);
    form.reiniciar();
  }

  const alCambiar = (e) => {
    setErrorRegistro("");
    setCreada(false);
    form.manejarCambio(e);
  };

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Crear cuenta</h1>
              <span>Regístrate para comprar en Volvo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 d-flex justify-content-center">
        <form
          noValidate
          onSubmit={manejarSubmit}
          className="p-4 shadow rounded"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <CampoFormulario
            id="nombre"
            etiqueta="Nombre"
            maxLength={60}
            placeholder="Ingrese su nombre"
            valor={form.valores.nombre}
            error={form.mostrarError("nombre")}
            onChange={alCambiar}
            onBlur={form.manejarBlur}
          />
          <CampoFormulario
            id="correo"
            etiqueta="Correo"
            tipo="email"
            maxLength={100}
            placeholder="Ingrese su correo"
            valor={form.valores.correo}
            error={form.mostrarError("correo")}
            onChange={alCambiar}
            onBlur={form.manejarBlur}
          />
          <CampoFormulario
            id="contrasena"
            etiqueta="Contraseña"
            tipo="password"
            maxLength={10}
            placeholder="Entre 4 y 10 caracteres"
            valor={form.valores.contrasena}
            error={form.mostrarError("contrasena")}
            onChange={alCambiar}
            onBlur={form.manejarBlur}
          />
          <CampoFormulario
            id="confirmar"
            etiqueta="Confirmar contraseña"
            tipo="password"
            maxLength={10}
            placeholder="Repita su contraseña"
            valor={form.valores.confirmar}
            error={form.mostrarError("confirmar")}
            onChange={alCambiar}
            onBlur={form.manejarBlur}
          />
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
          {errorRegistro && (
            <p className="avisoerror mt-3 text-center" role="alert">
              {errorRegistro}
            </p>
          )}
          {creada && (
            <p className="aviso mt-3 text-center" role="status">
              Cuenta creada correctamente.{" "}
              <Link to="/login" state={location.state}>
                Iniciar sesión
              </Link>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Registro;
