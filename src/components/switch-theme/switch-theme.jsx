import { useTheme } from "../theme-context/use-theme";

export const SwitcTheme = () => {
    const { value, setTheme } = useTheme();

    const toggleTheme = () => {
        if (value === "color") {
            setTheme("grey")
        } else {
            setTheme("color")
        }
    }

    return <button onClick={toggleTheme}>Toggle Theme</button>
}