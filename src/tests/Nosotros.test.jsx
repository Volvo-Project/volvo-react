import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Nosotros from '../pages/Nosotros'

describe('Página Nosotros', () => {
  it('muestra el título y las secciones principales', () => {
    render(<Nosotros />)
    expect(screen.getByRole('heading', { level: 1, name: 'Nosotros' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sobre Volvo' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nuestra historia' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'El equipo' })).toBeInTheDocument()
  })

  it('lista a los 3 integrantes del equipo', () => {
    render(<Nosotros />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText(/Nicolás Olivares/)).toBeInTheDocument()
    expect(screen.getByText(/Matías Rodríguez/)).toBeInTheDocument()
    expect(screen.getByText(/Emiliano Cerda/)).toBeInTheDocument()
  })
})
