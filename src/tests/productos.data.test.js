import { describe, it, expect } from 'vitest'
import productos from '../data/productos'

describe('Datos de productos', () => {
  it('todos los ids son únicos (son la clave de la URL /producto/:id)', () => {
    const ids = productos.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('los juegos gratis tienen precio 0 y los de pago precio mayor a 0', () => {
    productos.forEach((p) => {
      if (p.esGratis) expect(p.precio).toBe(0)
      else expect(p.precio).toBeGreaterThan(0)
    })
  })
})
