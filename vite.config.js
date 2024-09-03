import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 4000, // Puerto personalizado
        // host: "0.0.0.0", // Escuchar en todas las interfaces de red
        open: true, // Abrir el navegador automáticamente
        https: false, // Usa HTTPS si es true
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: "~", replacement: "/src" },
            { find: "modules", replacement: "/src/modules" },
        ],
        /* alias: {
            "~": "/src",
            modules: path.resolve("/src/modules"),
            
        },*/
    },
});
