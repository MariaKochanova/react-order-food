export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {/* Подумать. Если у отзыва нет текста и рейтинга, то не отрисовывать
                Сам отзыв вынести в отдельный компонент. Разметку списка оставить тут */}
                {reviews.map((review) => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
        </>
    )
}