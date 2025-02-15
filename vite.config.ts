import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "./dist",
    }),
    {
      name: "deduplicate-styles",
      generateBundle(_, bundle) {
        const styles = new Set();
        Object.values(bundle).forEach((file) => {
          if (file.type === "asset" && file.fileName.endsWith(".css")) {
            if (styles.has(file.source)) {
              delete bundle[file.fileName];
            } else {
              styles.add(file.source);
            }
          }
        });
      },
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vcl-components",
      fileName: (format) => `vcl-components.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // No incluir React en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "animate.css/animate.min.css";
          @use "@styles/variables";
          @use "@styles/mixins";
          @use "@styles/global";
          @use "@styles/fonts";
        `, // Asegúrate de que esta ruta sea correcta
      },
    },
  },
});
