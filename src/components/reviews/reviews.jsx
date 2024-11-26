import styles from './review.module.css'

export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul className={styles.reviews} >
                {/* Подумать. Если у отзыва нет текста и рейтинга, то не отрисовывать
                Сам отзыв вынести в отдельный компонент. Разметку списка оставить тут */}
                {reviews.map((review) => (
                    <li key={review.id} className={styles.review} >
                        <p className={styles.name} >{review.user}</p>
                        <p>{review.text}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}