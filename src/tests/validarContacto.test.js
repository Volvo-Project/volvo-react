import { describe, it, expect } from 'vitest'
import { validarContacto } from '../utils/validarContacto'

const valido = { nombre: 'Ana', correo: 'ana@gmail.com', comentario: 'Hola' }

describe('validarContacto', () => {
  it('no devuelve errores si todo está correcto', () => {
    expect(validarContacto(valido)).toEqual({})
  })

  it('exige nombre, correo y comentario', () => {
    const errores = validarContacto({ nombre: '  ', correo: '', comentario: '' })
    expect(errores).toEqual({
      nombre: 'El nombre es obligatorio',
      correo: 'El correo es obligatorio',
      comentario: 'El comentario no puede estar vacío',
    })
  })

  it('el nombre no puede pasar de 100 caracteres', () => {
    expect(validarContacto({ ...valido, nombre: 'a'.repeat(101) }).nombre).toBe('Máximo 100 caracteres')
    expect(validarContacto({ ...valido, nombre: 'a'.repeat(100) }).nombre).toBeUndefined()
  })

  it('acepta los 3 dominios permitidos', () => {
    ;['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'].forEach((d) => {
      expect(validarContacto({ ...valido, correo: `ana${d}` }).correo).toBeUndefined()
    })
  })

  it('rechaza otros dominios y un correo que es solo el dominio', () => {
    const msg = 'Ingresa un correo válido terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com'
    expect(validarContacto({ ...valido, correo: 'ana@yahoo.com' }).correo).toBe(msg)
    expect(validarContacto({ ...valido, correo: '@gmail.com' }).correo).toBe(msg)
  })

  it('rechaza correos con espacios o más de un @', () => {
    const msg = 'Ingresa un correo válido terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com'
    expect(validarContacto({ ...valido, correo: 'ana maria@gmail.com' }).correo).toBe(msg)
    expect(validarContacto({ ...valido, correo: 'ana@@gmail.com' }).correo).toBe(msg)
  })

  it('el correo no distingue mayúsculas', () => {
    expect(validarContacto({ ...valido, correo: 'ANA@GMAIL.COM' }).correo).toBeUndefined()
  })

  it('el comentario no puede pasar de 500 caracteres', () => {
    expect(validarContacto({ ...valido, comentario: 'x'.repeat(501) }).comentario).toBe('Máximo 500 caracteres')
    expect(validarContacto({ ...valido, comentario: 'x'.repeat(500) }).comentario).toBeUndefined()
  })
})
