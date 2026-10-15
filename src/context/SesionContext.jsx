import { createContext, useContext, useState } from "react";

// Igual que el carrito: un Context para que Header, Login y Carrito compartan la sesión.
// Usa las mismas claves de localStorage que la versión HTML (volvo-web).
const SesionContext = createContext(null);
const CLAVE_USUARIOS = "usuarios";
const CLAVE_SESION = "usuarioSesion";

function leer(clave, porDefecto) {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? porDefecto;
  } catch {
    return porDefecto;
  }
}

export function SesionProvider({ children }) {
  // null = nadie ha iniciado sesión. Se recupera de localStorage al cargar la página.
  const [sesion, setSesion] = useState(() => leer(CLAVE_SESION, null));

  function registrar({ nombre, correo, contrasena }) {
    const usuarios = leer(CLAVE_USUARIOS, []);
    const correoLimpio = correo.trim().toLowerCase();
    if (usuarios.some((u) => u.correo === correoLimpio)) {
      return { ok: false, error: "Este correo ya está registrado" };
    }
    const nuevo = { nombre: nombre.trim(), correo: correoLimpio, contrasena, rol: "Cliente" };
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify([...usuarios, nuevo]));
    return { ok: true };
  }

  function iniciarSesion(correo, contrasena) {
    const correoLimpio = correo.trim().toLowerCase();
    const usuario = leer(CLAVE_USUARIOS, []).find(
      (u) => u.correo === correoLimpio && u.contrasena === contrasena,
    );
    if (!usuario) {
      return { ok: false, error: "El correo o la contraseña no son correctos" };
    }
    // En la sesión NO se guarda la contraseña.
    const nueva = { nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(nueva));
    setSesion(nueva);
    return { ok: true };
  }

  function cerrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
    setSesion(null);
  }

  return (
    <SesionContext.Provider value={{ sesion, registrar, iniciarSesion, cerrarSesion }}>
      {children}
    </SesionContext.Provider>
  );
}

export function useSesion() {
  const contexto = useContext(SesionContext);
  if (!contexto) {
    throw new Error("useSesion debe usarse dentro de <SesionProvider>");
  }
  return contexto;
}
