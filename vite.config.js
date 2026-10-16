import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.js'],
    coverage: {
      provider: 'v8',
      include: ['src/components/**', 'src/pages/**', 'src/data/**', 'src/context/**', 'src/hooks/**', 'src/utils/**'],
      reporter: ['text', 'html'],
    },
  },
})
