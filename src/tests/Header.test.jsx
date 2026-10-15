import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'
import { CarritoProvider } from '../context/CarritoContext'
import { SesionProvider } from '../context/SesionContext'


beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    get() {
      return this.classList.contains('header-text') ? 500 : 80
    },
  })
})
afterAll(() => {
  delete HTMLElement.prototype.offsetHeight
})

function renderizarHeader() {
  return render(
    <MemoryRouter>
      <SesionProvider>
        <CarritoProvider>
          <div className="header-text" />
          <Header />
        </CarritoProvider>
      </SesionProvider>
    </MemoryRouter>,
  )
}

function simularScroll(valor) {
  Object.defineProperty(window, 'scrollY', { value: valor, configurable: true, writable: true })
  fireEvent.scroll(window)
}

describe('Header', () => {
  it('muestra el enlace Productos apuntando a /producto', () => {
    renderizarHeader()
    expect(screen.getByRole('link', { name: 'Productos' })).toHaveAttribute('href', '/producto')
  })

  it('no tiene fondo cuando la página está arriba', () => {
    simularScroll(0)
    renderizarHeader()
    expect(screen.getByRole('banner')).not.toHaveClass('background-header')
  })

  it('agrega la clase background-header al hacer scroll hacia abajo', () => {
    simularScroll(0)
    renderizarHeader()
    simularScroll(1000)
    expect(screen.getByRole('banner')).toHaveClass('background-header')
  })

  it('el contador del carrito suma las cantidades guardadas', () => {
    localStorage.setItem('carrito', JSON.stringify([
      { id: 'a', nombre: 'A', precio: 1000, cantidad: 2 },
      { id: 'b', nombre: 'B', precio: 500, cantidad: 3 },
    ]))
    renderizarHeader()
    expect(screen.getByText('5')).toBeVisible()
  })

  it('el contador está oculto si el carrito está vacío', () => {
    renderizarHeader()
    expect(document.getElementById('carrito-contador')).not.toBeVisible()
  })

  it('sin sesión muestra Iniciar sesión y Registrarse', () => {
    renderizarHeader()
    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: 'Registrarse' })).toHaveAttribute('href', '/registro')
  })

  it('con sesión muestra Cerrar sesión con el nombre y oculta Registrarse', () => {
    localStorage.setItem('usuarioSesion', JSON.stringify({ nombre: 'Ana Pérez', correo: 'ana@gmail.com', rol: 'Cliente' }))
    renderizarHeader()
    expect(screen.getByRole('link', { name: 'Cerrar sesión (Ana)' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Registrarse' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Iniciar sesión' })).not.toBeInTheDocument()
  })

  it('al cerrar sesión se borra de localStorage y vuelve el menú de visitante', async () => {
    const user = userEvent.setup()
    localStorage.setItem('usuarioSesion', JSON.stringify({ nombre: 'Ana Pérez', correo: 'ana@gmail.com', rol: 'Cliente' }))
    renderizarHeader()
    await user.click(screen.getByRole('link', { name: 'Cerrar sesión (Ana)' }))
    expect(localStorage.getItem('usuarioSesion')).toBeNull()
    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })
})
