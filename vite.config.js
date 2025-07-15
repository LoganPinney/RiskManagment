// vite.config.js  (in the project root)
const { defineConfig } = require('vite');
const react          = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 5173      // ← lock Vite to 5173
  },
  build: {
    outDir: 'dist'
  }
});
