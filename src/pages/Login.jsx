import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import CampoFormulario from "../components/CampoFormulario";
import { useSesion } from "../context/SesionContext";
import { useFormulario } from "../hooks/useFormulario";
import { validarLogin } from "../utils/validarLogin";

const INICIAL = { correo: "", contrasena: "" };

function Login() {
  const { sesion, iniciarSesion } = useSesion();
  const location = useLocation();
  // Si llegó desde el carrito, ahí mismo se le devuelve después de iniciar sesión.
  const volverA = location.state?.volverA ?? "/";
  const form = useFormulario(INICIAL, validarLogin);
  const [errorLogin, setErrorLogin] = useState("");

  // Ya hay sesión (recién iniciada o de antes): no tiene sentido mostrar el formulario.
  if (sesion) {
    return <Navigate to={volverA} replace />;
  }

  function manejarSubmit(e) {
    e.preventDefault();
    if (!form.intentarEnvio()) return;
    const resultado = iniciarSesion(form.valores.correo, form.valores.contrasena);
    if (!resultado.ok) setErrorLogin(resultado.error);
  }

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Iniciar sesión</h1>
              <span>Ingresa con tu correo y contraseña</span>
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
          {location.state?.motivo && (
            <p className="alert alert-info" role="status">
              {location.state.motivo}
            </p>
          )}
          <CampoFormulario
            id="correo"
            etiqueta="Correo"
            tipo="email"
            maxLength={100}
            placeholder="Ingrese su correo"
            valor={form.valores.correo}
            error={form.mostrarError("correo")}
            onChange={(e) => {
              setErrorLogin("");
              form.manejarCambio(e);
            }}
            onBlur={form.manejarBlur}
          />
          <CampoFormulario
            id="contrasena"
            etiqueta="Contraseña"
            tipo="password"
            maxLength={10}
            placeholder="Ingrese su contraseña"
            valor={form.valores.contrasena}
            error={form.mostrarError("contrasena")}
            onChange={(e) => {
              setErrorLogin("");
              form.manejarCambio(e);
            }}
            onBlur={form.manejarBlur}
          />
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
          {errorLogin && (
            <p className="avisoerror mt-3 text-center" role="alert">
              {errorLogin}
            </p>
          )}
          <p className="mt-3 text-center">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" state={location.state}>
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
