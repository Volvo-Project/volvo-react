import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import BlogDetalle from '../pages/BlogDetalle'
import blogs from '../data/blogs'

const renderizarEn = (ruta) =>
  render(
    <MemoryRouter initialEntries={[ruta]}>
      <Routes>
        <Route path="/blogs/:id" element={<BlogDetalle />} />
      </Routes>
    </MemoryRouter>,
  )

describe('Página BlogDetalle', () => {
  it('muestra el título y todos los párrafos de la noticia de la URL', () => {
    const blog = blogs[0]
    renderizarEn(`/blogs/${blog.id}`)
    expect(screen.getByRole('heading', { level: 2, name: blog.tituloArticulo })).toBeInTheDocument()
    expect(screen.getByText(blog.parrafos[0])).toBeInTheDocument()
    expect(screen.getByText(blog.parrafos[blog.parrafos.length - 1])).toBeInTheDocument()
  })

  it('una noticia sin video muestra su imagen', () => {
    const blog = blogs.find((b) => !b.video)
    renderizarEn(`/blogs/${blog.id}`)
    expect(screen.getByRole('img', { name: blog.alt })).toHaveAttribute('src', blog.imagenDetalle)
    expect(screen.queryByTitle(/Video:/)).not.toBeInTheDocument()
  })

  it('una noticia con video muestra el iframe en vez de la imagen', () => {
    const blog = blogs.find((b) => b.video)
    renderizarEn(`/blogs/${blog.id}`)
    expect(screen.getByTitle(`Video: ${blog.titulo}`)).toHaveAttribute('src', blog.video)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('tiene un link para volver al blog', () => {
    renderizarEn(`/blogs/${blogs[0].id}`)
    expect(screen.getByRole('link', { name: '← Volver al blog' })).toHaveAttribute('href', '/blogs')
  })

  it('con un id que no existe muestra "Noticia no encontrada"', () => {
    renderizarEn('/blogs/no-existe')
    expect(screen.getByRole('heading', { name: 'Noticia no encontrada' })).toBeInTheDocument()
  })
})
