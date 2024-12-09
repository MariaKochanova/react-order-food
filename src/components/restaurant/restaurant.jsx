import { useAuth } from '../autn-context/use-auth.js'
import { Menu } from '../menu/menu.jsx'
import { Reviews } from '../reviews/reviews.jsx'
import { ReviewForm } from '../review-form/review-form.jsx'
import styles from './restaurant.module.css'

export const Restaurant = ({ name, menu, reviews }) => {
    const { auth } = useAuth();

    if (!name) {
        return null;
    }

    return (
        <section className={styles.restaurant}>
            <h2 className={styles.title}>{name}</h2>
            <Menu menuIds={menu} />
            {Boolean(reviews.length) && <Reviews reviewsIds={reviews} />}
            {auth.isAuthorized && <ReviewForm />}
        </section>
    )
}