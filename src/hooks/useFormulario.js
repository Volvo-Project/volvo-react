import { useState } from "react";

// Hook propio: junta el patrón de formulario que se repite en Login y Registro.
// Recibe los valores iniciales y una función validar(valores) que devuelve los errores.
export function useFormulario(inicial, validar) {
  const [valores, setValores] = useState(inicial);
  const [tocados, setTocados] = useState({});
  const [intentoEnvio, setIntentoEnvio] = useState(false);

  // Los errores se calculan en cada render (no son estado): validación en tiempo real.
  const errores = validar(valores);

  // Solo se muestra el error de un campo si ya salió de él o si intentó enviar.
  const mostrarError = (campo) => ((tocados[campo] || intentoEnvio) && errores[campo]) || "";

  function manejarCambio(e) {
    const { name, value } = e.target;
    setValores((actual) => ({ ...actual, [name]: value }));
  }

  function manejarBlur(e) {
    const { name } = e.target;
    setTocados((actual) => ({ ...actual, [name]: true }));
  }

  // Devuelve true si se puede enviar (no hay errores).
  function intentarEnvio() {
    setIntentoEnvio(true);
    return Object.keys(errores).length === 0;
  }

  function reiniciar() {
    setValores(inicial);
    setTocados({});
    setIntentoEnvio(false);
  }

  return { valores, mostrarError, manejarCambio, manejarBlur, intentarEnvio, reiniciar };
}
