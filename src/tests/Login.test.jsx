import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import { SesionProvider } from '../context/SesionContext'

const usuario = { nombre: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', rol: 'Cliente' }

// Simula la app mínima: /login, y destinos "/" y "/carrito" para comprobar la redirección.
function renderizar(entrada = '/login') {
  return render(
    <MemoryRouter initialEntries={[entrada]}>
      <SesionProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<p>Página de inicio</p>} />
          <Route path="/carrito" element={<p>Página del carrito</p>} />
        </Routes>
      </SesionProvider>
    </MemoryRouter>,
  )
}
const correo = () => screen.getByLabelText('Correo')
const contrasena = () => screen.getByLabelText('Contraseña')
const ingresar = () => screen.getByRole('button', { name: 'Ingresar' })

describe('Página Login', () => {
  it('muestra los campos y el link a registro', () => {
    renderizar()
    expect(correo()).toBeInTheDocument()
    expect(contrasena()).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Regístrate' })).toHaveAttribute('href', '/registro')
  })

  it('al enviar vacío muestra los errores de validación', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.click(ingresar())
    expect(screen.getByText('El correo es obligatorio')).toBeInTheDocument()
    expect(screen.getByText('La contraseña es obligatoria')).toBeInTheDocument()
  })

  it('valida el dominio del correo en tiempo real', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(correo(), 'ana@yahoo.com')
    await user.tab()
    expect(screen.getByText(/Debe terminar en @duoc.cl/)).toBeInTheDocument()
  })

  it('con credenciales que no existen muestra error y se queda en el login', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(correo(), 'nadie@gmail.com')
    await user.type(contrasena(), '1234')
    await user.click(ingresar())
    expect(screen.getByRole('alert')).toHaveTextContent('El correo o la contraseña no son correctos')
    expect(localStorage.getItem('usuarioSesion')).toBeNull()
  })

  it('con credenciales correctas inicia sesión y va al inicio', async () => {
    const user = userEvent.setup()
    localStorage.setItem('usuarios', JSON.stringify([usuario]))
    renderizar()
    await user.type(correo(), 'ana@gmail.com')
    await user.type(contrasena(), '1234')
    await user.click(ingresar())
    expect(screen.getByText('Página de inicio')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('usuarioSesion')).nombre).toBe('Ana')
  })

  it('si venía del carrito, después de iniciar sesión vuelve al carrito', async () => {
    const user = userEvent.setup()
    localStorage.setItem('usuarios', JSON.stringify([usuario]))
    renderizar({ pathname: '/login', state: { volverA: '/carrito', motivo: 'Inicia sesión para finalizar tu compra' } })
    expect(screen.getByText('Inicia sesión para finalizar tu compra')).toBeInTheDocument()
    await user.type(correo(), 'ana@gmail.com')
    await user.type(contrasena(), '1234')
    await user.click(ingresar())
    expect(screen.getByText('Página del carrito')).toBeInTheDocument()
  })

  it('si ya hay sesión, /login redirige sin mostrar el formulario', () => {
    localStorage.setItem('usuarioSesion', JSON.stringify({ nombre: 'Ana', correo: 'ana@gmail.com', rol: 'Cliente' }))
    renderizar()
    expect(screen.getByText('Página de inicio')).toBeInTheDocument()
  })
})
