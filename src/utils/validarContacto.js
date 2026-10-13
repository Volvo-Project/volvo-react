// Reglas del formulario de contacto (mismas que en volvo-web/contacto.js).
// Es una función "pura": recibe los valores y devuelve un objeto con los errores.
// Si un campo está bien, no aparece en el objeto.
const DOMINIOS = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

export function validarContacto({ nombre, correo, comentario }) {
  const errores = {};

  const nombreLimpio = nombre.trim();
  if (nombreLimpio === "") {
    errores.nombre = "El nombre es obligatorio";
  } else if (nombreLimpio.length > 100) {
    errores.nombre = "Máximo 100 caracteres";
  }

  const correoLimpio = correo.trim().toLowerCase();
  if (correoLimpio === "") {
    errores.correo = "El correo es obligatorio";
  } else if (correoLimpio.length > 100) {
    errores.correo = "Máximo 100 caracteres";
  } else {
    const dominio = DOMINIOS.find((d) => correoLimpio.endsWith(d));
    const formatoValido = /^[^\s@]+@[^\s@]+$/.test(correoLimpio);
    if (!dominio || !formatoValido) {
      errores.correo = "Ingresa un correo válido terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com";
    }
  }

  const comentarioLimpio = comentario.trim();
  if (comentarioLimpio === "") {
    errores.comentario = "El comentario no puede estar vacío";
  } else if (comentarioLimpio.length > 500) {
    errores.comentario = "Máximo 500 caracteres";
  }

  return errores;
}
