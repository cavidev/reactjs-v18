import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
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
