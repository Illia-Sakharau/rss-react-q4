/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
        'src/test',
        'src/setupTest.ts',
        'src/types.ts',
        'src/vite-env.d.ts',
        'src/main.tsx',
      ],
    },
  },
});
