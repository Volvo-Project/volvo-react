import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'


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
      <div className="header-text" />
      <Header />
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
})
