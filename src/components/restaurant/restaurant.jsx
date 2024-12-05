import { useAuth } from '../autn-context/use-auth.js'
import { Menu } from '../menu/menu.jsx'
import { Reviews } from '../reviews/reviews.jsx'
import { ReviewForm } from '../review-form/review-form.jsx'
import styles from './restaurant.module.css'

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;
    const { auth } = useAuth();

    if (!name || menu.lenght === 0) {
        return null;
    }

    return (
        <section className={styles.restaurant}>
            <h2 className={styles.title}>{name}</h2>
            <Menu menu={menu} />
            {Boolean(reviews.length) && <Reviews reviews={reviews} />}
            {auth.isAuthorized && <ReviewForm />}
        </section>
    )
}