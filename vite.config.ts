import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components', 'src/layouts', 'src/views'],

      resolvers: [PrimeVueResolver({})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
