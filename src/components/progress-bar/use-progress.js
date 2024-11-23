import { useEffect } from 'react'
import { useState } from 'react'

const getNewPercent = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    const scrollableHeight = scrollHeight - clientHeight;

    if (scrollableHeight === 0) return "100%";

    return ((scrollTop / scrollableHeight) * 100) + "%";
}

export const useProgress = () => {
    const [progress, setProgress] = useState("0%");

    useEffect(() => {
        const handleSroll = () => {
            setProgress(getNewPercent());
        };

        window.addEventListener("scroll", handleSroll);

        return () => {
            window.removeEventListener("scroll", handleSroll);
        };
    }, []);

    return progress;
};
