import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isProd = process.env.NODE_ENV === "production";

console.log("__dirname", path.resolve(__dirname, "src"));
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000, // Puerto personalizado
        // host: "0.0.0.0", // Escuchar en todas las interfaces de red
        open: true, // Abrir el navegador automáticamente
        https: false, // Usa HTTPS si es true
    },
    plugins: [react(), tsconfigPaths()],
    base: isProd ? "/reactjs-v18/" : "/", // https://cavidev.github.io
    resolve: {
        alias: [
            { find: "~", replacement: path.resolve(__dirname, "src") },
            { find: "modules", replacement: path.resolve(__dirname, "src/modules") },
            { find: "packages", replacement: path.resolve(__dirname, "packages") },
        ],
    },
    build: {
        //sourcemap: true,
    },
});
