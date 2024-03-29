import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
});
