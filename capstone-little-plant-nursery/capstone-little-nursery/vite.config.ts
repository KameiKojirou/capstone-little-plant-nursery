import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/KameiKojirou/capstone-little-nursery/",
  plugins: [react()],
})
