import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTest'],
    css: true,
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: [
        'src/API',
        'src/store',
        'src/test',
        'src/setupTest.ts',
        'src/types.ts',
        'src/vite-env.d.ts',
        'src/pages/_document.tsx',
      ],
    },
  },
});
