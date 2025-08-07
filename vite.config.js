import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // Import React plugin

export default defineConfig({
  plugins: [
    react(),      // Add React plugin first
    tailwindcss(),
  ],
});