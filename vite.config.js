import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from 'vite-plugin-html';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
          /**
           * Data that needs to be injected into the index.html ejs template
           */
          inject: {
              data: {
                  title: 'legado_web_vue',
              },
          },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    base: mode === "development" ? "/" : "./",
    server: {
        port: 8080,
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "/src"),
      },
    },
  });