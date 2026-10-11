import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import DetalleProducto from '../pages/DetalleProducto'
import productos from '../data/productos'
import { CarritoProvider } from '../context/CarritoContext'

const renderizarEn = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <CarritoProvider>
        <Routes>
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </CarritoProvider>
    </MemoryRouter>,
  )

describe('Página DetalleProducto', () => {
  it('muestra el nombre del producto que viene en la URL', () => {
    const p = productos[1]
    renderizarEn(`/producto/${p.id}`)
    expect(screen.getByRole('heading', { level: 1, name: p.nombre })).toBeInTheDocument()
  })

  it('muestra "Producto no encontrado" si el id no existe', () => {
    renderizarEn('/producto/id-que-no-existe')
    expect(screen.getByRole('heading', { name: 'Producto no encontrado' })).toBeInTheDocument()
  })

  it('la pestaña Opiniones muestra la cantidad de opiniones del juego', () => {
    const p = productos.find((x) => x.opiniones?.length)
    renderizarEn(`/producto/${p.id}`)
    expect(screen.getByRole('tab', { name: `Opiniones (${p.opiniones.length})` })).toBeInTheDocument()
  })

  it('al hacer clic en Opiniones aparece el autor de la primera reseña', async () => {
    const user = userEvent.setup()
    const p = productos.find((x) => x.opiniones?.length)
    renderizarEn(`/producto/${p.id}`)
    await user.click(screen.getByRole('tab', { name: `Opiniones (${p.opiniones.length})` }))
    expect(screen.getByText(p.opiniones[0].autor)).toBeVisible()
  })

  it('agregar al carrito guarda el producto y muestra el aviso', async () => {
    const user = userEvent.setup()
    const p = productos[1]
    renderizarEn(`/producto/${p.id}`)
    await user.click(screen.getByRole('button', { name: /agregar al carrito/i }))
    expect(screen.getByText('Producto agregado al carrito')).toBeInTheDocument()
    const guardado = JSON.parse(localStorage.getItem('carrito'))
    expect(guardado).toHaveLength(1)
    expect(guardado[0]).toMatchObject({ id: p.id, cantidad: 1 })
  })

  it('una cantidad inválida muestra error y no agrega nada', async () => {
    const user = userEvent.setup()
    renderizarEn(`/producto/${productos[1].id}`)
    const cantidad = screen.getByLabelText('Cantidad a comprar')
    await user.clear(cantidad)
    await user.type(cantidad, '0')
    await user.click(screen.getByRole('button', { name: /agregar al carrito/i }))
    expect(screen.getByText('La cantidad debe ser un número entero mayor a 0')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('carrito'))).toHaveLength(0)
  })
})
