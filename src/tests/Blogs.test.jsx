import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Blogs from '../pages/Blogs'
import blogs from '../data/blogs'

const renderizar = () => render(<MemoryRouter><Blogs /></MemoryRouter>)

describe('Página Blogs', () => {
  it('muestra una tarjeta por cada noticia del arreglo', () => {
    renderizar()
    expect(screen.getAllByRole('article')).toHaveLength(blogs.length)
  })

  it('cada tarjeta muestra título, resumen e imagen', () => {
    renderizar()
    const blog = blogs[0]
    const tarjeta = screen.getByRole('heading', { name: blog.titulo }).closest('article')
    expect(within(tarjeta).getByText(blog.resumen)).toBeInTheDocument()
    expect(within(tarjeta).getByRole('img')).toHaveAttribute('src', blog.imagen)
  })

  it('"Noticia completa" enlaza al detalle /blogs/:id', () => {
    renderizar()
    const blog = blogs[1]
    const tarjeta = screen.getByRole('heading', { name: blog.titulo }).closest('article')
    expect(within(tarjeta).getByRole('link', { name: 'Noticia completa' })).toHaveAttribute('href', `/blogs/${blog.id}`)
  })
})
