import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    __SDK_VERSION__: JSON.stringify('0.2.12'),
  },
})
