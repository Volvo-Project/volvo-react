import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Producto from '../pages/Producto'

vi.mock('../data/productos', () => ({
  default: [
    { id: 'a', nombre: 'Juego A', categoria: 'Acción', imagen: '/a.jpg', posicionCard: '0%', precio: 12990, esGratis: false },
    { id: 'b', nombre: 'Juego B', categoria: 'Terror', imagen: '/b.jpg', posicionCard: '0%', precio: 0, esGratis: true },
  ],
}))

describe('Producto con datos simulados (mock)', () => {
  it('renderiza exactamente los 2 productos del mock', () => {
    render(<MemoryRouter><Producto /></MemoryRouter>)
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(2)
  })

  it('formatea el precio y marca el juego gratis', () => {
    render(<MemoryRouter><Producto /></MemoryRouter>)
    expect(screen.getByText('$12.990')).toBeInTheDocument()
    expect(screen.getByText('Gratis')).toBeInTheDocument()
  })
})
