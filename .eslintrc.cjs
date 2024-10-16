module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react/tsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        // "airbnb",
        //"prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.3" } },
    plugins: ["react-refresh", "react", "@typescript-eslint"],
    rules: {
        "react/jsx-no-target-blank": "true",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "import/no-unresolved": "error",
        "import/prefer-default-export": "true",
        "prettier/prettier": ["error"],
    },
};
