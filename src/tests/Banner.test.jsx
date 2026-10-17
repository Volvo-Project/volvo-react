import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Banner from "../components/Banner";

// Función falsa: reemplaza a navigate. No cambia de página, solo registra sus llamadas.
const navegarFalso = vi.fn();

// Reemplaza SOLO useNavigate; el resto de react-router-dom (MemoryRouter, Link) sigue siendo el real.
vi.mock("react-router-dom", async (importOriginal) => {
  const original = await importOriginal();
  return { ...original, useNavigate: () => navegarFalso };
});

// Borra lo que anotó el mock en la prueba anterior, para que no se mezclen.
beforeEach(() => navegarFalso.mockClear());

function renderizarBanner() {
  render(
    <MemoryRouter>
      <Banner />
    </MemoryRouter>,
  );
}

describe("Buscador del banner (con mock de useNavigate)", () => {
  it("al buscar un juego navega al catálogo con el texto", async () => {
    renderizarBanner();
    await userEvent.type(screen.getByRole("textbox", { name: "Buscar juego" }), "zelda");
    await userEvent.click(screen.getByRole("button", { name: "Buscar ahora" }));

    expect(navegarFalso).toHaveBeenCalledWith("/producto?buscar=zelda");
  });

  it("si el buscador está vacío, va al catálogo sin filtro", async () => {
    renderizarBanner();
    await userEvent.click(screen.getByRole("button", { name: "Buscar ahora" }));

    expect(navegarFalso).toHaveBeenCalledWith("/producto");
  });

  it("los espacios se codifican en la dirección", async () => {
    renderizarBanner();
    await userEvent.type(screen.getByRole("textbox", { name: "Buscar juego" }), "god of war");
    await userEvent.click(screen.getByRole("button", { name: "Buscar ahora" }));

    expect(navegarFalso).toHaveBeenCalledWith("/producto?buscar=god%20of%20war");
  });
});