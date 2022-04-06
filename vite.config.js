import { createVuePlugin } from 'vite-plugin-vue2';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({}) => {
  return {
    plugins: [createVuePlugin(), viteCommonjs()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          math: 'always',
        },
      },
    },
  };
});
