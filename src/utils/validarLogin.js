import { validarCorreo, validarContrasena } from "./validaciones";

export function validarLogin({ correo, contrasena }) {
  const errores = {};
  const errorCorreo = validarCorreo(correo);
  if (errorCorreo) errores.correo = errorCorreo;
  const errorContrasena = validarContrasena(contrasena);
  if (errorContrasena) errores.contrasena = errorContrasena;
  return errores;
}
