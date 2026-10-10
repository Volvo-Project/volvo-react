import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import DetalleProducto from '../pages/DetalleProducto'
import productos from '../data/productos'

// Simula entrar a /producto/<id> y deja que useParams lea el id de la URL.
const renderizarEn = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <Routes>
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
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
})
