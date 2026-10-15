import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { CarritoProvider } from '../context/CarritoContext'
import { SesionProvider } from '../context/SesionContext'

// Flujo completo con la App real: comprar exige iniciar sesión y luego vuelve al carrito.
describe('Flujo de compra con login', () => {
  it('carrito -> finalizar sin sesión -> login -> vuelve al carrito -> compra', async () => {
    const user = userEvent.setup()
    localStorage.setItem('carrito', JSON.stringify([{ id: 'a', nombre: 'Juego A', precio: 5000, cantidad: 1 }]))
    localStorage.setItem('usuarios', JSON.stringify([{ nombre: 'Ana', correo: 'ana@gmail.com', contrasena: '1234', rol: 'Cliente' }]))

    render(
      <MemoryRouter initialEntries={['/carrito']}>
        <SesionProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </SesionProvider>
      </MemoryRouter>,
    )

    // 1. Intenta comprar sin haber iniciado sesión: lo manda al login con un aviso
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Iniciar sesión' })).toBeInTheDocument()
    expect(screen.getByText('Inicia sesión para finalizar tu compra')).toBeInTheDocument()

    // 2. Inicia sesión: vuelve solo al carrito y el carrito sigue intacto
    await user.type(screen.getByLabelText('Correo'), 'ana@gmail.com')
    await user.type(screen.getByLabelText('Contraseña'), '1234')
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Carrito de Compras' })).toBeInTheDocument()
    expect(screen.getByText('Juego A')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cerrar sesión (Ana)' })).toBeInTheDocument()

    // 3. Ahora sí puede comprar
    await user.click(screen.getByRole('button', { name: 'Finalizar compra' }))
    expect(screen.getByText('Gracias por tu compra')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('carrito'))).toEqual([])
  })
})
