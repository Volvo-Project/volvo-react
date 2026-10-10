import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Desmonta los componentes entre pruebas para que no se mezclen.
afterEach(() => {
  cleanup()
})
