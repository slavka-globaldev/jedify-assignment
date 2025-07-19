import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '@layouts',
        replacement: resolve(root, 'app/layouts')
      },
      {
        find: '@routes',
        replacement: resolve(root, 'app/routes')
      }
    ]
  }
});
