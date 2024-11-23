import { useState } from 'react'

export const useCount = () => {
    const [value, setValue] = useState(0);

    const decrease = () => {
        setValue((value) => (value > 0 ? value - 1 : value))
    };

    const increase = () => {
        setValue((value) => (value < 5 ? value + 1 : value))
    };

    return {
        value,
        decrease,
        increase,
    };
};