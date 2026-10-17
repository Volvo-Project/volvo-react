import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { CarritoProvider } from "../context/CarritoContext";
import { SesionProvider } from "../context/SesionContext";

// Dibuja toda la app como si el usuario hubiera escrito "ruta" en el navegador.
// Es el mismo patrón de Rutas.test.jsx:10-19.
function montar(ruta) {
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <SesionProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </SesionProvider>
    </MemoryRouter>,
  );
}

describe("Página 404", () => {
  it("una dirección que no existe muestra Página no encontrada", () => {
    montar("/nadaqver");
    expect(screen.getByRole("heading", { level: 1, name: "Página no encontrada" })).toBeInTheDocument();
  });

  it("ofrece un enlace para volver al inicio", () => {
    montar("/nadaqver");
    expect(screen.getByRole("link", { name: "Volver al inicio" })).toHaveAttribute("href", "/");
  });

  it("una ruta que sí existe NO muestra la 404", () => {
    montar("/producto");
    expect(screen.queryByRole("heading", { name: "Página no encontrada" })).not.toBeInTheDocument();
  });
});