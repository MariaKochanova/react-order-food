import { useState } from "react"

export const CartCounter = () => {
    const [value, setValue] = useState(0);

    const increase = () => { 
        setValue((value) => (value < 5 ? value + 1 : value)) 
    };

    const decrease = () => { 
        setValue((value) => (value > 0 ? value - 1 : value))
    };

    return (
        <div>
            <p>{value}</p>
            <button onClick={decrease}> - </button>
            <button onClick={increase}> + </button>
        </div>
    )
}