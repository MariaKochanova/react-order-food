import { restaurants } from '../../constants/mock.js'
import { Restaurant } from '../restaurant/restaurant.jsx'

export const RestaurantsPage = () => {
    return (
        <main>
            {restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} key={restaurant.id} />
            ))}
        </main>
    )
}