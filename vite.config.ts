import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { config } from "dotenv";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env": process.env,
  },
  server: {
    host: "0.0.0.0", // Allows access from external networks (e.g., ngrok)
    port: 5173, // Make sure this matches your ngrok command
    strictPort: true, // Ensures the port is not changed
    allowedHosts: ["020a-119-235-120-198.ngrok-free.app"],
  },
});
