// Reglas compartidas por Contacto, Login y Registro.
// Cada función devuelve el mensaje de error, o undefined si el valor está bien.
export const DOMINIOS = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

export function validarCorreo(correo) {
  const limpio = correo.trim().toLowerCase();
  if (limpio === "") return "El correo es obligatorio";
  if (limpio.length > 100) return "Máximo 100 caracteres";
  const dominio = DOMINIOS.find((d) => limpio.endsWith(d));
  if (!dominio || !/^[^\s@]+@[^\s@]+$/.test(limpio)) {
    return "Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
  }
  return undefined;
}

export function validarContrasena(contrasena) {
  if (contrasena.trim() === "") return "La contraseña es obligatoria";
  if (contrasena.length < 4 || contrasena.length > 10) return "Debe tener entre 4 y 10 caracteres";
  return undefined;
}
