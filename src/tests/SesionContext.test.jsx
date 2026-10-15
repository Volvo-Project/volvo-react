import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { SesionProvider, useSesion } from '../context/SesionContext'

const montar = () => renderHook(() => useSesion(), { wrapper: SesionProvider })
const datos = { nombre: 'Ana', correo: 'ana@gmail.com', contrasena: '1234' }

describe('SesionContext', () => {
  it('empieza sin sesión', () => {
    expect(montar().result.current.sesion).toBeNull()
  })

  it('registrar guarda el usuario con rol Cliente y el correo en minúsculas', () => {
    const { result } = montar()
    let respuesta
    act(() => { respuesta = result.current.registrar({ ...datos, correo: 'ANA@Gmail.com' }) })
    expect(respuesta.ok).toBe(true)
    expect(JSON.parse(localStorage.getItem('usuarios'))[0]).toMatchObject({ correo: 'ana@gmail.com', rol: 'Cliente' })
  })

  it('no deja registrar dos veces el mismo correo', () => {
    const { result } = montar()
    act(() => { result.current.registrar(datos) })
    let respuesta
    act(() => { respuesta = result.current.registrar(datos) })
    expect(respuesta).toEqual({ ok: false, error: 'Este correo ya está registrado' })
    expect(JSON.parse(localStorage.getItem('usuarios'))).toHaveLength(1)
  })

  it('iniciarSesion con credenciales correctas guarda la sesión sin la contraseña', () => {
    const { result } = montar()
    act(() => { result.current.registrar(datos) })
    act(() => { result.current.iniciarSesion('ana@gmail.com', '1234') })
    expect(result.current.sesion).toEqual({ nombre: 'Ana', correo: 'ana@gmail.com', rol: 'Cliente' })
    expect(localStorage.getItem('usuarioSesion')).not.toContain('1234')
  })

  it('iniciarSesion con contraseña incorrecta falla y no crea sesión', () => {
    const { result } = montar()
    act(() => { result.current.registrar(datos) })
    let respuesta
    act(() => { respuesta = result.current.iniciarSesion('ana@gmail.com', 'mala') })
    expect(respuesta.ok).toBe(false)
    expect(result.current.sesion).toBeNull()
  })

  it('cerrarSesion borra la sesión', () => {
    const { result } = montar()
    act(() => { result.current.registrar(datos) })
    act(() => { result.current.iniciarSesion('ana@gmail.com', '1234') })
    act(() => { result.current.cerrarSesion() })
    expect(result.current.sesion).toBeNull()
    expect(localStorage.getItem('usuarioSesion')).toBeNull()
  })

  it('recupera la sesión guardada al cargar', () => {
    localStorage.setItem('usuarioSesion', JSON.stringify({ nombre: 'Luis', correo: 'l@duoc.cl', rol: 'Cliente' }))
    expect(montar().result.current.sesion.nombre).toBe('Luis')
  })

  it('useSesion fuera del proveedor lanza un error claro', () => {
    const silenciar = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useSesion())).toThrow('SesionProvider')
    silenciar.mockRestore()
  })
})
