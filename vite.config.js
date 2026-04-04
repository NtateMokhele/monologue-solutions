import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This tells the builder exactly how to compile your React code
export default defineConfig({
  plugins: [react()],
})
