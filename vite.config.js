import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@helpers", replacement: "/src/Helpers" },
      { find: "@components", replacement: "/src/Components" },
      { find: "@style", replacement: "/src/Styles" },
      { find: "@store", replacement: "/src/GlobalStore" },
      { find: "@svg", replacement: "/src/Svg" },
    ],
  },
});
