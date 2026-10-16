import { describe, it, expect } from 'vitest'
import blogs from '../data/blogs'

describe('Datos de blogs', () => {
  it('los ids son únicos (son la clave de la URL /blogs/:id)', () => {
    const ids = blogs.map((b) => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('cada noticia tiene título, resumen, imagen y al menos un párrafo', () => {
    blogs.forEach((b) => {
      expect(b.titulo).toBeTruthy()
      expect(b.resumen).toBeTruthy()
      expect(b.imagen).toBeTruthy()
      expect(b.parrafos.length).toBeGreaterThan(0)
    })
  })
})
