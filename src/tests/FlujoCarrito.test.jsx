import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { CarritoProvider } from '../context/CarritoContext'
import productos from '../data/productos'

// Prueba de flujo completo: usa la App real (rutas + Header + proveedor)
// y recorre lo mismo que haría una persona en el navegador.
const montarApp = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </MemoryRouter>,
  )

describe('Flujo completo del carrito', () => {
  it('catálogo -> detalle -> agregar -> carrito -> persiste tras recargar', async () => {
    const user = userEvent.setup()
    const juego = productos.find((p) => !p.esGratis)
    const { unmount } = montarApp('/producto')

    // 1. Desde el catálogo entra al detalle del juego
    const tarjeta = screen.getByRole('heading', { name: juego.nombre }).closest('.item')
    await user.click(within(tarjeta).getAllByRole('link')[0])
    expect(screen.getByRole('heading', { level: 1, name: juego.nombre })).toBeInTheDocument()

    // 2. Agrega 2 unidades
    const cantidad = screen.getByLabelText('Cantidad a comprar')
    await user.clear(cantidad)
    await user.type(cantidad, '2')
    await user.click(screen.getByRole('button', { name: /agregar al carrito/i }))
    expect(screen.getByText('Producto agregado al carrito')).toBeInTheDocument()
    expect(document.getElementById('carrito-contador')).toHaveTextContent('2')

    // 3. Va al carrito desde el ícono del menú
    await user.click(screen.getByRole('link', { name: 'Ver carrito de compras' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Carrito de Compras' })).toBeInTheDocument()
    expect(screen.getByText(juego.nombre)).toBeInTheDocument()
    expect(screen.getByText(`Total: $${(juego.precio * 2).toLocaleString('es-CL')}`)).toBeInTheDocument()

    // 4. "Recarga la página": se desmonta todo y se vuelve a montar con el mismo localStorage
    unmount()
    montarApp('/carrito')
    expect(screen.getByText(juego.nombre)).toBeInTheDocument()
    expect(document.getElementById('carrito-contador')).toHaveTextContent('2')
  })
})
