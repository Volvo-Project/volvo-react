import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Carrito from '../pages/Carrito'
import { CarritoProvider } from '../context/CarritoContext'
import { SesionProvider } from '../context/SesionContext'

const guardar = (items) => localStorage.setItem('carrito', JSON.stringify(items))
const renderizar = () =>
  render(
    <MemoryRouter>
      <SesionProvider>
        <CarritoProvider>
          <Routes>
            <Route path="/" element={<Carrito />} />
            <Route path="/login" element={<p>Pantalla de login</p>} />
          </Routes>
        </CarritoProvider>
      </SesionProvider>
    </MemoryRouter>,
  )

const dosJuegos = [
  { id: 'a', nombre: 'Juego A', precio: 10000, cantidad: 2 },
  { id: 'b', nombre: 'Juego B', precio: 2500, cantidad: 1 },
]

describe('Página Carrito', () => {
  it('con el carrito vacío avisa y ofrece volver a la tienda', () => {
    renderizar()
    expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver juegos' })).toHaveAttribute('href', '/producto')
  })

  it('muestra una fila por producto y el total', () => {
    guardar(dosJuegos)
    renderizar()
    expect(screen.getByText('Juego A')).toBeInTheDocument()
    expect(screen.getByText('Juego B')).toBeInTheDocument()
    expect(screen.getByText('Total: $22.500')).toBeInTheDocument()
  })

  it('el botón + suma una unidad y actualiza el total', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Sumar uno a Juego B' }))
    expect(screen.getByText('Total: $25.000')).toBeInTheDocument()
  })

  it('el botón - resta una unidad pero no baja de 1', async () => {
    const user = userEvent.setup()
    guardar([{ id: 'b', nombre: 'Juego B', precio: 2500, cantidad: 1 }])
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Restar uno a Juego B' }))
    expect(screen.getByText('Total: $2.500')).toBeInTheDocument()
  })

  it('Eliminar quita la fila del producto', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    const fila = screen.getByText('Juego A').closest('tr')
    await user.click(within(fila).getByRole('button', { name: 'Eliminar' }))
    expect(screen.queryByText('Juego A')).not.toBeInTheDocument()
    expect(screen.getByText('Total: $2.500')).toBeInTheDocument()
  })

  it('Vaciar carrito deja el total en cero', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Vaciar carrito' }))
    expect(screen.getByText('Total: $0')).toBeInTheDocument()
  })

  it('Finalizar compra con sesión iniciada agradece y vacía el carrito', async () => {
    const user = userEvent.setup()
    localStorage.setItem('usuarioSesion', JSON.stringify({ nombre: 'Ana Pérez', correo: 'ana@gmail.com', rol: 'Cliente' }))
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByText('Gracias por tu compra')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('carrito'))).toEqual([])
  })

  it('Finalizar compra con el carrito vacío muestra error', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByText('No tiene productos para comprar')).toBeInTheDocument()
  })

  it('Finalizar compra SIN sesión redirige al login y conserva el carrito', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByText('Pantalla de login')).toBeInTheDocument()
    expect(screen.queryByText('Gracias por tu compra')).not.toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('carrito'))).toHaveLength(2)
  })

  it('con el carrito vacío y sin sesión muestra el error en vez de ir al login', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByText('No tiene productos para comprar')).toBeInTheDocument()
    expect(screen.queryByText('Pantalla de login')).not.toBeInTheDocument()
  })
})
