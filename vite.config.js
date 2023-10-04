import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
// configure bootstrap to work with vite
export default defineConfig({
  plugins: [react()],
});
