import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const root = resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@layouts',
        replacement: resolve(root, 'app/layouts')
      },
      {
        find: '@routes',
        replacement: resolve(root, 'app/routes')
      },
      {
        find: '@assets',
        replacement: resolve(root, 'app/assets')
      },
      {
        find: '@pages',
        replacement: resolve(root, 'pages')
      },
      {
        find: '@modules',
        replacement: resolve(root, 'modules')
      },
      {
        find: '@shared',
        replacement: resolve(root, 'shared')
      }
    ]
  }
});
