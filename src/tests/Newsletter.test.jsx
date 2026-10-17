import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Cta from "../components/Cta";

// Cta usa <Link>, por eso necesita el router.
// Devuelve el input y el botón para no buscarlos en cada prueba.
function renderizarCta() {
  render(
    <MemoryRouter>
      <Cta />
    </MemoryRouter>,
  );
  return {
    input: screen.getByRole("textbox", { name: "Correo para el newsletter" }),
    boton: screen.getByRole("button", { name: "Suscribirme Ahora" }),
  };
}

describe("Newsletter", () => {
  it("con el correo vacío muestra el error en rojo", async () => {
    const { boton } = renderizarCta();
    await userEvent.click(boton);

    const aviso = screen.getByText("El correo es obligatorio");
    expect(aviso).toHaveClass("avisoerror");
  });

  it("rechaza un correo de un dominio no permitido", async () => {
    const { input, boton } = renderizarCta();
    await userEvent.type(input, "matias@yahoo.com");
    await userEvent.click(boton);

    expect(screen.getByText("Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com")).toBeInTheDocument();
  });

  it("con un correo válido confirma la suscripción y vacía el input", async () => {
    const { input, boton } = renderizarCta();
    await userEvent.type(input, "matias@duoc.cl");
    await userEvent.click(boton);

    const aviso = screen.getByText(/Te suscribiste con matias@duoc.cl/);
    expect(aviso).toHaveClass("aviso");
    expect(input).toHaveValue("");
  });
});