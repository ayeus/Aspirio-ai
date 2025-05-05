import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      '496a-2401-4900-6297-2fa3-e556-ed58-cf36-a16f.ngrok-free.app',
      // Add other allowed hosts if needed
    ],
  },
});