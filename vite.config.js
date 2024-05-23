import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@components", replacement: "/src/components" },
      { find: "@common", replacement: "/src/components/common" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@scss", replacement: "/src/scss" },
      { find: "@redux", replacement: "/src/redux/reducers" },
    ],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});
