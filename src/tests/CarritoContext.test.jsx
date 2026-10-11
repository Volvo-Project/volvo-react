import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { CarritoProvider, useCarrito } from '../context/CarritoContext'

const juegoA = { id: 'a', nombre: 'Juego A', precio: 10000, imagen: '/a.jpg' }
const juegoB = { id: 'b', nombre: 'Juego B', precio: 2500, imagen: '/b.jpg' }

const montar = () => renderHook(() => useCarrito(), { wrapper: CarritoProvider })

describe('CarritoContext', () => {
  it('empieza vacío', () => {
    const { result } = montar()
    expect(result.current.items).toEqual([])
    expect(result.current.totalItems).toBe(0)
    expect(result.current.total).toBe(0)
  })

  it('agrega un producto nuevo con su cantidad', () => {
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 2))
    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toMatchObject({ id: 'a', cantidad: 2 })
  })

  it('si el producto ya existe suma la cantidad en vez de duplicar', () => {
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 1))
    act(() => result.current.agregar(juegoA, 3))
    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].cantidad).toBe(4)
  })

  it('calcula el total y la cantidad de items', () => {
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 2)) // 20000
    act(() => result.current.agregar(juegoB, 3)) // 7500
    expect(result.current.total).toBe(27500)
    expect(result.current.totalItems).toBe(5)
  })

  it('cambiarCantidad suma, resta y nunca baja de 1', () => {
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 1))
    act(() => result.current.cambiarCantidad('a', 1))
    expect(result.current.items[0].cantidad).toBe(2)
    act(() => result.current.cambiarCantidad('a', -5))
    expect(result.current.items[0].cantidad).toBe(1)
  })

  it('eliminar quita solo ese producto y vaciar deja todo en cero', () => {
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 1))
    act(() => result.current.agregar(juegoB, 1))
    act(() => result.current.eliminar('a'))
    expect(result.current.items.map((i) => i.id)).toEqual(['b'])
    act(() => result.current.vaciar())
    expect(result.current.items).toEqual([])
  })

  it('guarda el carrito en localStorage (mock de setItem)', () => {
    const espia = vi.spyOn(Storage.prototype, 'setItem')
    const { result } = montar()
    act(() => result.current.agregar(juegoA, 1))
    expect(espia).toHaveBeenCalledWith('carrito', expect.stringContaining('"id":"a"'))
    espia.mockRestore()
  })

  it('carga el carrito guardado al iniciar', () => {
    localStorage.setItem('carrito', JSON.stringify([{ ...juegoB, cantidad: 4 }]))
    const { result } = montar()
    expect(result.current.items[0]).toMatchObject({ id: 'b', cantidad: 4 })
  })

  it('si localStorage tiene datos dañados parte con el carrito vacío', () => {
    localStorage.setItem('carrito', 'esto-no-es-json')
    const { result } = montar()
    expect(result.current.items).toEqual([])
  })

  it('useCarrito fuera del proveedor lanza un error claro', () => {
    const silenciar = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useCarrito())).toThrow('CarritoProvider')
    silenciar.mockRestore()
  })
})
