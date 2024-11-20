import { Menu } from '../menu/menu.jsx'
import { Reviews } from '../reviews/reviews.jsx'

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    if (!name || menu.lenght === 0) {
        return null;
    }

    return (
        <section>
            <h2>{name}</h2>
            <Menu menu={menu} />
            {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        </section>
    )
}