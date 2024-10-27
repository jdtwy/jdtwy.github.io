import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // Express backend on the VM
        changeOrigin: true,               // Handles potential CORS issues
      },
    },
  },
})

//test