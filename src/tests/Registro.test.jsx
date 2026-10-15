import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Registro from '../pages/Registro'
import { SesionProvider } from '../context/SesionContext'

const renderizar = () =>
  render(
    <MemoryRouter>
      <SesionProvider>
        <Registro />
      </SesionProvider>
    </MemoryRouter>,
  )
const campo = (nombre) => screen.getByLabelText(nombre)
const registrarse = () => screen.getByRole('button', { name: 'Registrarse' })

async function llenar(user, { nombre = 'Ana', correo = 'ana@gmail.com', pass = '1234', conf = '1234' } = {}) {
  await user.type(campo('Nombre'), nombre)
  await user.type(campo('Correo'), correo)
  await user.type(campo('Contraseña'), pass)
  await user.type(campo('Confirmar contraseña'), conf)
}

describe('Página Registro', () => {
  it('al enviar vacío muestra los 4 errores', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.click(registrarse())
    expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('El correo es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('La contraseña es obligatoria')).toBeInTheDocument()
    expect(screen.getByText('Confirma tu contraseña')).toBeInTheDocument()
  })

  it('avisa en tiempo real si las contraseñas no coinciden', async () => {
    const user = userEvent.setup()
    renderizar()
    await llenar(user, { conf: '9999' })
    await user.tab()
    expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument()
  })

  it('un registro válido guarda el usuario, confirma y limpia el formulario', async () => {
    const user = userEvent.setup()
    renderizar()
    await llenar(user)
    await user.click(registrarse())
    expect(screen.getByRole('status')).toHaveTextContent('Cuenta creada correctamente')
    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
    expect(JSON.parse(localStorage.getItem('usuarios'))[0]).toMatchObject({ correo: 'ana@gmail.com', rol: 'Cliente' })
    expect(campo('Nombre')).toHaveValue('')
  })

  it('no permite registrar un correo que ya existe', async () => {
    const user = userEvent.setup()
    localStorage.setItem('usuarios', JSON.stringify([{ nombre: 'X', correo: 'ana@gmail.com', contrasena: '1234', rol: 'Cliente' }]))
    renderizar()
    await llenar(user)
    await user.click(registrarse())
    expect(screen.getByRole('alert')).toHaveTextContent('Este correo ya está registrado')
    expect(JSON.parse(localStorage.getItem('usuarios'))).toHaveLength(1)
  })
})
