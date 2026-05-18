import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [tailwindcss(), tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
  },
});
