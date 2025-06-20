/** @type {import('tailwindcss').Config} */
import { fileURLToPath, URL } from "url";

export default {
    darkMode: "class",
    content: [
        fileURLToPath(new URL("./src/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        fileURLToPath(new URL("./src/modules/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        //fileURLToPath(new URL("./node_modules/primereact/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/home/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/text/**/*.{js,ts,jsx,tsx}", import.meta.url)),
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                inherit: "inherit",
                /*background: {
                    light: "#F4F6FA",
                    dark: "#4A4F6D",
                },
                navbar: {
                    light: "#2B5D68",
                    dark: "#457F8C",
                },
                heading: {
                    light: "#2B5D68",
                    dark: "#457F8C",
                },
                textColor: {
                    light: "#2E2E2E", // nuevo color más amigable
                    dark: "#FFFFFF",
                },
                subtext: {
                    light: "#768E95",
                    dark: "#C0C7D6",
                },*/
                // Alias funcionales para tema light/dark
                background: {
                    light: "#E4E8EE", // gray.50
                    dark: "#1f2335", // manual (para dark mode)
                },
                surface: {
                    light: "#FFFFFF", // tarjetas en light
                    dark: "#2a2f4a", // tarjetas en dark
                },
                surface1: {
                    light: "#ded9df", // tarjetas en light
                    dark: "#5e71a2", // tarjetas en dark
                },

                textColor: {
                    light: "#1f2937", // gris oscuro (gray.800 aprox)
                    dark: "#f9fafb", // texto claro
                    mutedLight: "#6B7385", // gray.500
                    mutedDark: "#9ca3af", // gris claro en dark
                },
                primary: {
                    light: "#5C66D2", // blue.500
                    dark: "#758CEC", // blue.400 o similar
                },
                accent: {
                    light: "#BC3263", // cerise.500
                    dark: "#EC798B", // cerise.300 aprox
                },
                success: {
                    light: "#91E396", // emerald.300
                    dark: "#065f46", // verde oscuro
                },
            },
            animation: {
                meteor: "meteor 5s linear infinite",
                aurora: "aurora 8s ease-in-out infinite alternate",
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: 0,
                    },
                },
                aurora: {
                    "0%": {
                        backgroundPosition: "0% 50%",
                        transform: "rotate(-5deg) scale(0.9)",
                    },
                    "25%": {
                        backgroundPosition: "50% 100%",
                        transform: "rotate(5deg) scale(1.1)",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                        transform: "rotate(-3deg) scale(0.95)",
                    },
                    "75%": {
                        backgroundPosition: "50% 0%",
                        transform: "rotate(3deg) scale(1.05)",
                    },
                    "100%": {
                        backgroundPosition: "0% 50%",
                        transform: "rotate(-5deg) scale(0.9)",
                    },
                },
                ripple: {
                    "0%, 100%": {
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50%, -50%) scale(0.9)",
                    },
                },
            },
        },
    },
    plugins: [],
};
