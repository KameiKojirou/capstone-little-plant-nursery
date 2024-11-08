import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/capstone-little-plant-nursery",
  plugins: [react()],
})
