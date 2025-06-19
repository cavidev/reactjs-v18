import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect } from "react";
import useLocalStorage from "~/hooks/useLocalStorage";

interface Theme {
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}

type th = Theme["theme"];

export const ThemeContext = createContext<Theme>({
    theme: "dark",
    setTheme: () => {},
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
