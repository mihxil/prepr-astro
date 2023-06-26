import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  mode: "ssr",
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});