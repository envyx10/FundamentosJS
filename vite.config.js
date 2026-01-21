


import { defineConfig } from 'vite';

export default defineConfig({
  base: '/FundamentosJS/', // ✅ Correcto: Coincide con tu repo envyx10/FundamentosJS
  plugins: [],             // ✅ Corregido: "plugins" (antes decía "pluging")
  build: {
    outDir: 'docs',        // ✅ FALTABA ESTO: Obligatorio para que cree la carpeta docs
    emptyOutDir: true,     // Opcional: Limpia la carpeta antes de crearla
  }
});