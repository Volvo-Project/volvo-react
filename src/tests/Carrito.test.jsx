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

// El total está dentro del panel "Resumen del pedido" (un <aside>).
const resumen = () => within(screen.getByRole('complementary', { name: 'Resumen del pedido' }))

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
    expect(resumen().getByText('$22.500')).toBeInTheDocument()
  })

  it('el botón + suma una unidad y actualiza el total', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Sumar uno a Juego B' }))
    expect(resumen().getByText('$25.000')).toBeInTheDocument()
  })

  it('el botón - resta una unidad pero no baja de 1', async () => {
    const user = userEvent.setup()
    guardar([{ id: 'b', nombre: 'Juego B', precio: 2500, cantidad: 1 }])
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Restar uno a Juego B' }))
    expect(resumen().getByText('$2.500')).toBeInTheDocument()
  })

  it('Eliminar quita la fila del producto', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    const fila = screen.getByText('Juego A').closest('.cart-item')
    await user.click(within(fila).getByRole('button', { name: 'Eliminar' }))
    expect(screen.queryByText('Juego A')).not.toBeInTheDocument()
    expect(resumen().getByText('$2.500')).toBeInTheDocument()
  })

  it('Vaciar carrito deja el total en cero', async () => {
    const user = userEvent.setup()
    guardar(dosJuegos)
    renderizar()
    await user.click(screen.getByRole('button', { name: 'Vaciar carrito' }))
    expect(resumen().getByText('$0')).toBeInTheDocument()
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

  it('cada tarjeta muestra el subtotal, el precio unitario "c/u" y la miniatura', () => {
    guardar([{ id: 'a', nombre: 'Juego A', precio: 10000, cantidad: 2, imagen: '/a.jpg' }])
    renderizar()
    const tarjeta = screen.getByText('Juego A').closest('.cart-item')
    expect(within(tarjeta).getByText('$20.000')).toBeInTheDocument()
    expect(within(tarjeta).getByText('$10.000 c/u')).toBeInTheDocument()
    expect(tarjeta.querySelector('img')).toHaveAttribute('src', '/a.jpg')
  })

  it('un producto sin imagen muestra el ícono de respaldo', () => {
    guardar([{ id: 'a', nombre: 'Juego A', precio: 1000, cantidad: 1 }])
    renderizar()
    const tarjeta = screen.getByText('Juego A').closest('.cart-item')
    expect(tarjeta.querySelector('img')).toBeNull()
    expect(tarjeta.querySelector('i.fa-gamepad')).not.toBeNull()
  })

  it('el panel de resumen muestra la nota de impuestos', () => {
    renderizar()
    expect(screen.getByText(/impuestos, si aplican/i)).toBeInTheDocument()
  })
})
