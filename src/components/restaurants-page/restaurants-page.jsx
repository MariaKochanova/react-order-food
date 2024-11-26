import { useState } from 'react'
import { restaurants } from '../../constants/mock.js'
import { Restaurant } from '../restaurant/restaurant.jsx'
import { Tab } from '../tab/tab.jsx'
import styles from './reastaurants-page.module.css'

export const RestaurantsPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

    const handleSetActiveRestaurantId = (id) => {
        if (activeRestaurantId === id) {
            return
        }

        setActiveRestaurantId(id);
    }

    return (
        <main className={styles.restaurantsPage}>
            <nav className={styles.restaurantsNav}>
                <span>Restaurants: </span>
                {restaurants.map(({ name, id }) => (
                    <Tab
                        key={id}
                        title={name}
                        onClick={() => handleSetActiveRestaurantId(id)}
                        isActive={id === activeRestaurantId}
                        viewVariant={id === activeRestaurantId ? 'active' : 'default'}
                    />
                ))}
            </nav>

            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
        </main>
    )
}