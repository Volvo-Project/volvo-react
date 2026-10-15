import { describe, it, expect } from 'vitest'
import { validarCorreo, validarContrasena } from '../utils/validaciones'
import { validarLogin } from '../utils/validarLogin'
import { validarRegistro } from '../utils/validarRegistro'

describe('validarCorreo / validarContrasena', () => {
  it('acepta correos de los 3 dominios permitidos', () => {
    ;['a@duoc.cl', 'a@profesor.duoc.cl', 'a@gmail.com'].forEach((c) => {
      expect(validarCorreo(c)).toBeUndefined()
    })
  })
  it('rechaza vacío, dominio ajeno y solo el dominio', () => {
    expect(validarCorreo('')).toBe('El correo es obligatorio')
    expect(validarCorreo('a@yahoo.com')).toMatch(/Debe terminar en/)
    expect(validarCorreo('@gmail.com')).toMatch(/Debe terminar en/)
  })
  it('la contraseña debe tener entre 4 y 10 caracteres', () => {
    expect(validarContrasena('')).toBe('La contraseña es obligatoria')
    expect(validarContrasena('abc')).toBe('Debe tener entre 4 y 10 caracteres')
    expect(validarContrasena('abcd')).toBeUndefined()
    expect(validarContrasena('a'.repeat(10))).toBeUndefined()
    expect(validarContrasena('a'.repeat(11))).toBe('Debe tener entre 4 y 10 caracteres')
  })
})

describe('validarLogin', () => {
  it('sin errores con datos correctos', () => {
    expect(validarLogin({ correo: 'a@gmail.com', contrasena: '1234' })).toEqual({})
  })
  it('marca correo y contraseña vacíos', () => {
    expect(Object.keys(validarLogin({ correo: '', contrasena: '' }))).toEqual(['correo', 'contrasena'])
  })
})

describe('validarRegistro', () => {
  const ok = { nombre: 'Ana', correo: 'a@gmail.com', contrasena: '1234', confirmar: '1234' }
  it('sin errores con datos correctos', () => {
    expect(validarRegistro(ok)).toEqual({})
  })
  it('el nombre es obligatorio y máximo 60 caracteres', () => {
    expect(validarRegistro({ ...ok, nombre: ' ' }).nombre).toBe('El nombre es obligatorio')
    expect(validarRegistro({ ...ok, nombre: 'a'.repeat(61) }).nombre).toBe('Máximo 60 caracteres')
  })
  it('las contraseñas deben coincidir', () => {
    expect(validarRegistro({ ...ok, confirmar: '9999' }).confirmar).toBe('Las contraseñas no coinciden')
    expect(validarRegistro({ ...ok, confirmar: '' }).confirmar).toBe('Confirma tu contraseña')
  })
})
