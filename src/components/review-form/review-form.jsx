import { useForm } from './use-form'
import { Counter } from '../counter/counter'
import { Button } from '../button/button'
import styles from './review-form.module.css'

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
        <form className={styles.formReview} onSubmit={(event) => event.preventDefault()}>
            <h3 className={styles.title} >Leave your review</h3>
            <div className={styles.block} >
                <span>Name: </span>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className={styles.block} >
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
            <Button onClick={clear}>clear</Button>
        </form>
    )
}