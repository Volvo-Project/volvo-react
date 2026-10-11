import { createContext, useContext, useEffect, useState } from "react";

// Contexto = "mochila compartida": cualquier componente puede leer y modificar
// el carrito sin pasar props por todos los niveles.
const CarritoContext = createContext(null);
const CLAVE = "carrito";

function leerCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE) || "[]");
    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

export function CarritoProvider({ children }) {
  // Estado: la lista de items. useState(leerCarrito) lee localStorage solo la primera vez.
  const [items, setItems] = useState(leerCarrito);

  // Efecto: cada vez que cambia el carrito, se guarda en localStorage.
  useEffect(() => {
    localStorage.setItem(CLAVE, JSON.stringify(items));
  }, [items]);

  function agregar(producto, cantidad) {
    setItems((actual) => {
      const existe = actual.find((item) => item.id === producto.id);
      if (existe) {
        // Si ya estaba, se suma la cantidad en vez de duplicar la fila.
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item,
        );
      }
      const { id, nombre, precio, imagen } = producto;
      return [...actual, { id, nombre, precio, imagen, cantidad }];
    });
  }

  function cambiarCantidad(id, diferencia) {
    setItems((actual) =>
      actual.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad + diferencia) } : item,
      ),
    );
  }

  function eliminar(id) {
    setItems((actual) => actual.filter((item) => item.id !== id));
  }

  function vaciar() {
    setItems([]);
  }

  // Valores derivados: se calculan a partir de items, no necesitan su propio estado.
  const totalItems = items.reduce((suma, item) => suma + item.cantidad, 0);
  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items, totalItems, total, agregar, cambiarCantidad, eliminar, vaciar }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const contexto = useContext(CarritoContext);
  if (!contexto) {
    throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
  }
  return contexto;
}
