import { defineConfig } from "vite"
import { resolve } from "node:path"

import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`
    }
  }
})
