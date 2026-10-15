import { validarCorreo, validarContrasena } from "./validaciones";

export function validarRegistro({ nombre, correo, contrasena, confirmar }) {
  const errores = {};

  const nombreLimpio = nombre.trim();
  if (nombreLimpio === "") {
    errores.nombre = "El nombre es obligatorio";
  } else if (nombreLimpio.length > 60) {
    errores.nombre = "Máximo 60 caracteres";
  }

  const errorCorreo = validarCorreo(correo);
  if (errorCorreo) errores.correo = errorCorreo;

  const errorContrasena = validarContrasena(contrasena);
  if (errorContrasena) errores.contrasena = errorContrasena;

  if (confirmar === "") {
    errores.confirmar = "Confirma tu contraseña";
  } else if (confirmar !== contrasena) {
    errores.confirmar = "Las contraseñas no coinciden";
  }

  return errores;
}
