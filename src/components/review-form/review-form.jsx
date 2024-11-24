import { useForm } from "./use-form"
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
    const {
        form,
        setName,
        setText,
        increaseRating,
        decreaseRating,
        clear,
    } = useForm();

    const { name, text, rating } = form;

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <h3>Leave your review</h3>
            <div>
                <span>Name: </span>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <span>Review: </span>
                <textarea
                    name="review"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></textarea>
            </div>
            <div>
                <span>Rating: </span>
                <Counter
                    value={rating}
                    decrease={decreaseRating}
                    increase={increaseRating}
                />
            </div>
            <button onClick={clear}>clear</button>
        </form>
    )
}