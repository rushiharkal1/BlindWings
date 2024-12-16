import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BlindWings/',  // Specify the base path for GitHub Pages
  plugins: [react()],    // Add the React plugin
})
