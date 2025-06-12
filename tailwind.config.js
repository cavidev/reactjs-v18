/** @type {import('tailwindcss').Config} */
import { fileURLToPath, URL } from "url";

export default {
    darkMode: "class",
    content: [
        fileURLToPath(new URL("./src/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        fileURLToPath(new URL("./src/modules/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        fileURLToPath(new URL("./node_modules/primereact/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/home/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/text/**/*.{js,ts,jsx,tsx}", import.meta.url)),
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                inherit: "inherit",
                background: {
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
                text: {
                    light: "#2E2E2E", // nuevo color más amigable
                    dark: "#FFFFFF",
                },
                subtext: {
                    light: "#768E95",
                    dark: "#C0C7D6",
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
