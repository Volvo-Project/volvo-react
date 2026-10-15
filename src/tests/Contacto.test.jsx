import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import App from '../App'
import { CarritoProvider } from '../context/CarritoContext'
import { SesionProvider } from '../context/SesionContext'

const renderizar = () => render(<MemoryRouter><Contacto /></MemoryRouter>)
const nombre = () => screen.getByLabelText('Nombre')
const correo = () => screen.getByLabelText('Correo')
const comentario = () => screen.getByLabelText('Comentario')
const enviar = () => screen.getByRole('button', { name: 'Enviar' })

describe('Página Contacto', () => {
  it('muestra los 3 campos y el botón Enviar', () => {
    renderizar()
    expect(nombre()).toBeInTheDocument()
    expect(correo()).toBeInTheDocument()
    expect(comentario()).toBeInTheDocument()
    expect(enviar()).toBeInTheDocument()
  })

  it('no muestra errores antes de que el usuario toque algo', () => {
    renderizar()
    expect(screen.queryByText('El nombre es obligatorio')).not.toBeInTheDocument()
  })

  it('al enviar vacío muestra los 3 errores y no confirma el envío', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.click(enviar())
    expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('El correo es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('El comentario no puede estar vacío')).toBeInTheDocument()
    expect(screen.queryByText('Mensaje enviado correctamente')).not.toBeInTheDocument()
  })

  it('valida en tiempo real: error al salir del campo y se quita al corregir', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(correo(), 'ana@yahoo.com')
    await user.tab()
    expect(screen.getByText(/correo válido terminado en @duoc.cl/)).toBeInTheDocument()
    expect(correo()).toHaveAttribute('aria-invalid', 'true')

    await user.clear(correo())
    await user.type(correo(), 'ana@gmail.com')
    expect(screen.queryByText(/correo válido terminado en @duoc.cl/)).not.toBeInTheDocument()
    expect(correo()).toHaveAttribute('aria-invalid', 'false')
  })

  it('un envío válido muestra la confirmación y limpia el formulario', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(nombre(), 'Ana')
    await user.type(correo(), 'ana@duoc.cl')
    await user.type(comentario(), 'Quiero consultar por un juego')
    await user.click(enviar())
    expect(screen.getByText('Mensaje enviado correctamente')).toBeInTheDocument()
    expect(nombre()).toHaveValue('')
    expect(correo()).toHaveValue('')
    expect(comentario()).toHaveValue('')
  })

  it('el contador cuenta los caracteres del comentario', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(comentario(), 'Hola')
    expect(screen.getByText('4/500')).toBeInTheDocument()
  })

  it('la ruta /contacto está registrada en la App', () => {
    render(
      <MemoryRouter initialEntries={['/contacto']}>
        <SesionProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </SesionProvider>
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { level: 1, name: 'Contacto' })).toBeInTheDocument()
  })
})
