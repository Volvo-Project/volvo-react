import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";
import { CarritoProvider } from "../context/CarritoContext";
import { SesionProvider } from "../context/SesionContext";

// Igual que en Header.test.jsx: el Header necesita el router y los dos Context.
function renderizarHeader() {
  render(
    <MemoryRouter>
      <SesionProvider>
        <CarritoProvider>
          <div className="header-text" />
          <Header />
        </CarritoProvider>
      </SesionProvider>
    </MemoryRouter>,
  );
  // Devuelve el botón ☰ para no repetir la búsqueda en cada prueba.
  return screen.getByRole("button", { name: /abrir menú/i });
}

describe("Menú del celular", () => {
  it("parte cerrado", () => {
    const boton = renderizarHeader();
    expect(boton).toHaveAttribute("aria-expanded", "false");
    expect(boton).not.toHaveClass("active");
  });

  it("al hacer clic se abre: muestra la lista y el ícono cambia a ✕", async () => {
    const boton = renderizarHeader();
    await userEvent.click(boton);

    expect(boton).toHaveAttribute("aria-expanded", "true");
    expect(boton).toHaveClass("active");
    expect(screen.getByRole("list")).toHaveStyle({ display: "block" });
  });

  it("un segundo clic lo vuelve a cerrar", async () => {
    const boton = renderizarHeader();
    // Dos clics seguidos: abrir y cerrar.
    await userEvent.click(boton);
    await userEvent.click(boton);
    

    expect(boton).toHaveAttribute("aria-expanded", "false");
  });

  it("se cierra al tocar un enlace", async () => {
    const boton = renderizarHeader();
    await userEvent.click(boton);
    await userEvent.click(screen.getByRole("link", { name: "Productos" }));

    expect(boton).toHaveAttribute("aria-expanded", "false");
  });
});