import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/todolist-react/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    preview: {
      port: 8080,
      strictPort: true,
    },
    server: {
      port: 8080,
      strictPort: true,
      host: true,
      origin: "http://localhost:8080",
    },
  }
})
