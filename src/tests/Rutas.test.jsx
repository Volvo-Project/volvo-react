import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { CarritoProvider } from '../context/CarritoContext'
import { SesionProvider } from '../context/SesionContext'
import blogs from '../data/blogs'

// Verifica que los links del menú no lleven a pantallas vacías: cada ruta debe estar registrada.
const montar = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <SesionProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </SesionProvider>
    </MemoryRouter>,
  )

describe('Rutas del menú', () => {
  it.each([
    ['/nosotros', 'Nosotros'],
    ['/blogs', 'Blog'],
    ['/contacto', 'Contacto'],
    ['/carrito', 'Carrito de Compras'],
    ['/login', 'Iniciar sesión'],
    ['/registro', 'Crear cuenta'],
  ])('la ruta %s muestra su página', (ruta, titulo) => {
    montar(ruta)
    expect(screen.getByRole('heading', { level: 1, name: titulo })).toBeInTheDocument()
  })

  it('/blogs/:id muestra el detalle de una noticia', () => {
    montar(`/blogs/${blogs[0].id}`)
    expect(screen.getByRole('heading', { level: 1, name: blogs[0].encabezado })).toBeInTheDocument()
  })
})
