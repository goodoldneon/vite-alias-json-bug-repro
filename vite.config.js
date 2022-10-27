const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const fs = require("fs/promises");

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  server: {
    open: true,
    port: 8080,
  },
});
