import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "/",
  plugins: [react(), eslint()],
  preview: {
    port: 8080,
  },
  server: {
    port: 8080,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
