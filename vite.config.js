import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000, // Puerto personalizado
        // host: "0.0.0.0", // Escuchar en todas las interfaces de red
        open: true, // Abrir el navegador automáticamente
        https: false, // Usa HTTPS si es true
    },
    plugins: [
        react(),
        ,
        tsconfigPaths(), // Añadir soporte para los paths del tsconfig
    ],
    resolve: {
        alias: [
            { find: "~", replacement: "/src" },
            { find: "modules", replacement: "/src/modules" },
        ],
    },
});
