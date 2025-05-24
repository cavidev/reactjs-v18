module.exports = {
    root: true,
    // parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        //"plugin:react/tsx-runtime",
        "plugin:react-hooks/recommended",
        // "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:tailwindcss/recommended", // 🔥 AGREGADO para Tailwind
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect", // Mejor usar "detect" para que tome cualquier versión de React automáticamente
        },
    },
    plugins: [
        "react-refresh",
        "react",
        "@typescript-eslint",
        "tailwindcss", // 🔥 AGREGADO el plugin
    ],
    rules: {
        "react/jsx-no-target-blank": "warn",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "import/no-unresolved": "error",
        "import/prefer-default-export": "warn",
        "prettier/prettier": ["error"],
    },
};
