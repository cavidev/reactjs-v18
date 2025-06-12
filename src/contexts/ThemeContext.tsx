import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface Theme {
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}

type th = Theme["theme"];

export const ThemeContext = createContext<Theme>({
    theme: "dark",
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<th>("dark");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "light" ? "dark" : "light");
        root.classList.add(theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
