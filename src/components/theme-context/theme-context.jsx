import { useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("color");

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "color" ? "grey" : "color"));
    };

    return (
        <ThemeContext.Provider value={{ value: theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}