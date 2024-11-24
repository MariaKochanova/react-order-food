export const Counter = ({ value, decrease, increase }) => {
    return (
        <div>
            <button onClick={decrease}> - </button>
            {value}
            <button onClick={increase}> + </button>
        </div>
    );
};