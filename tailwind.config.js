/** @type {import('tailwindcss').Config} */
import { fileURLToPath, URL } from "url";

export default {
    content: [
        fileURLToPath(new URL("./src/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        fileURLToPath(new URL("./src/modules/**/*.{html,js,jsx,ts,tsx,mdx}", import.meta.url)),
        fileURLToPath(new URL("./node_modules/primereact/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/home/**/*.{js,ts,jsx,tsx}", import.meta.url)),
        fileURLToPath(new URL("./packages/text/**/*.{js,ts,jsx,tsx}", import.meta.url)),
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            inherit: "inherit",
            theme: {
                base: {
                    lightest: "#A49FB5",
                    light: "#7C7692",
                    DEFAULT: "#4A4F6D",
                    dark: "#241F30",
                    darkest: "#191524",
                },
                accent: {
                    red: "#FF6B6B",
                    teal: "#4ECDC4",
                    yellow: "#FFD93D",
                    purple: "#9D4EDD",
                },
                text: {
                    light: "#E0E0E0",
                    DEFAULT: "#FFFFFF",
                },
                0: "#544059",
                1: "#457F8C",
                2: "#C1D9D2",
                3: "#3D435C",
                4: "#33384C",
                5: "#4A4F6D",
            },
        },

        extend: {
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
