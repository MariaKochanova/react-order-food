import { Menu } from '../menu/menu.jsx'
import { Reviews } from '../reviews/reviews.jsx'

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    if (!name) {
        return null;
    }

    return (
        <section key={restaurant.id}>
            <h2>{name}</h2>
            <Menu menu={menu} />
            {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        </section>
    )
}