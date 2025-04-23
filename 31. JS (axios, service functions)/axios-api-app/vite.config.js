import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    watch: {
      ignored: ["**/db.json"], // 👈 this is the key line
    },
  },
});
