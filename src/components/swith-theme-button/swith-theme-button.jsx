import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const SwitchThemeButton = () => {
    const { value, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {value === "color" ? "Switch to grey" : "Switch to color"}
        </Button>
    );
}