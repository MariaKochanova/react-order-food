import { ReviewContainer } from '../review/review-container'
import styles from './review.module.css'

export const Reviews = ({ reviewsIds }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews} >
                {reviewsIds.map((id) => (
                    <li key={id} className={styles.review} >
                        <ReviewContainer id={id} />
                    </li>
                ))}
            </ul>
        </>
    )
}