import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Producto from '../pages/Producto'
import productos from '../data/productos'

const renderizar = () =>
  render(
    <MemoryRouter>
      <Producto />
    </MemoryRouter>,
  )

describe('Página Producto (catálogo)', () => {
  it('muestra una tarjeta por cada producto del arreglo', () => {
    renderizar()
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(productos.length)
  })

  it('muestra "Gratis" en un juego gratuito', () => {
    renderizar()
    const gratis = productos.find((p) => p.esGratis)
    const tarjeta = screen.getByRole('heading', { name: gratis.nombre }).closest('.item')
    expect(within(tarjeta).getByText('Gratis')).toBeInTheDocument()
  })

  it('muestra el precio con formato chileno en un juego de pago', () => {
    renderizar()
    const pago = productos.find((p) => !p.esGratis)
    const tarjeta = screen.getByRole('heading', { name: pago.nombre }).closest('.item')
    expect(within(tarjeta).getByText(`$${pago.precio.toLocaleString('es-CL')}`)).toBeInTheDocument()
  })

  it('cada tarjeta enlaza al detalle /producto/:id', () => {
    renderizar()
    const primero = productos[0]
    const tarjeta = screen.getByRole('heading', { name: primero.nombre }).closest('.item')
    const enlaces = within(tarjeta).getAllByRole('link')
    expect(enlaces[0]).toHaveAttribute('href', `/producto/${primero.id}`)
  })

  it('el buscador filtra los juegos al escribir', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(screen.getByRole('searchbox', { name: 'Buscar juego' }), 'warframe')
    const titulos = screen.getAllByRole('heading', { level: 4 })
    titulos.forEach((t) => expect(t.textContent.toLowerCase()).toContain('warframe'))
    expect(titulos.length).toBeLessThan(productos.length)
  })

  it('si nada coincide con la búsqueda no muestra tarjetas', async () => {
    const user = userEvent.setup()
    renderizar()
    await user.type(screen.getByRole('searchbox', { name: 'Buscar juego' }), 'zzzzzz')
    expect(screen.queryAllByRole('heading', { level: 4 })).toHaveLength(0)
  })

  it('el filtro de la URL muestra solo los juegos de esa categoría', () => {
    render(
      <MemoryRouter initialEntries={['/producto?filtro=hor']}>
        <Producto />
      </MemoryRouter>,
    )
    const esperados = productos.filter((p) => p.filtro === 'hor').length
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(esperados)
  })

  it('al hacer clic en una categoría se filtra el catálogo', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/producto']}>
        <Producto />
      </MemoryRouter>,
    )
    await user.click(screen.getByRole('link', { name: 'Aventura' }))
    const esperados = productos.filter((p) => p.filtro === 'avn').length
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(esperados)
    expect(screen.getByRole('link', { name: 'Aventura' })).toHaveClass('is_active')
  })
})
