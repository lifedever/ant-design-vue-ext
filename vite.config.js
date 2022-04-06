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
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.js'),
        name: 'antdx',
        fileName: (format) => `antd-ext.${format}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'ant-design-vue', 'axios'],
        output: {
          globals: {
            vue: 'AntD_EXT'
          }
        }
      }
    }
  };
});
