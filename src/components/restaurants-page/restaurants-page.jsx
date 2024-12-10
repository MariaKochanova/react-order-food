import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurants-slice.js'
import { RestaurantContainer } from '../restaurant/restaurant-container.jsx'
import { RestaurantTabContainer } from '../restaurant-tab/restaurant-tab-container.jsx'
import styles from './reastaurants-page.module.css'

export const RestaurantsPage = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

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
                {restaurantsIds.map((id) => (
                    <RestaurantTabContainer
                        key={id}
                        id={id}
                        onClick={() => handleSetActiveRestaurantId(id)}
                        isActive={id === activeRestaurantId}
                        viewVariant={id === activeRestaurantId ? 'active' : 'default'}
                    />
                ))}
            </nav>

            {activeRestaurantId && (
                <RestaurantContainer id={activeRestaurantId} key={activeRestaurantId} />
            )}
        </main>
    )
}