import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";

// Inicio necesita el router porque Banner usa useNavigate y las tarjetas usan <Link>.
function renderizarInicio() {
  render(
    <MemoryRouter>
      <Inicio />
    </MemoryRouter>,
  );
}

describe("Página de inicio", () => {
  it("muestra las secciones principales", () => {
    renderizarInicio();
    expect(screen.getByRole("heading", { name: "Juegos en tendencia" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Más Jugados" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Categorías Principales" })).toBeInTheDocument();
  });

  it("cada categoría lleva al catálogo filtrado", () => {
    renderizarInicio();
    const enlace = screen.getByRole("link", { name: "Categoría Terror" });
    expect(enlace).toHaveAttribute("href", "/producto?filtro=hor");
  });
    
});