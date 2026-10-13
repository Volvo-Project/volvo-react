import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Producto from '../pages/Producto'
import productos from '../data/productos'

// Dibuja el catálogo como si el navegador estuviera en `ruta`
const renderizarEn = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <Producto />
    </MemoryRouter>,
  )

describe('Paginación del catálogo', () => {
  it('con los 23 juegos muestra los botones 1, 2 y 3', () => {
    // PREPARAR
    renderizarEn('/producto')

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '3' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '4' })).not.toBeInTheDocument()
  })

  it('al hacer clic en 2 se ven los juegos del 9 al 16', async () => {
    const user = userEvent.setup()
    renderizarEn('/producto')

    await user.click(screen.getByRole('link', { name: '2' }))

    expect(screen.getByRole('heading', { name: productos[8].nombre })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: productos[0].nombre })).not.toBeInTheDocument()
  })

  it('marca como activa la página actual', () => {
    renderizarEn('/producto?pagina=2')
    expect(screen.getByRole('link', { name: '2' })).toHaveClass('is_active')
    expect(screen.getByRole('link', { name: '1' })).not.toHaveClass('is_active')
  })

  it('conserva la categoría al cambiar de página', async () => {
    const user = userEvent.setup()
    renderizarEn('/producto?filtro=avn')

    await user.click(screen.getByRole('link', { name: '2' }))

    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(1)
  })
})