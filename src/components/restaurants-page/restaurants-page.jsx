import { useState } from 'react'
import { restaurants } from '../../constants/mock.js'
import { Restaurant } from '../restaurant/restaurant.jsx'
import { Tab } from '../tab/tab.jsx'

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
        <main>
            {restaurants.map(({ name, id }) => (
                <Tab
                    key={id}
                    title={name}
                    onClick={() => handleSetActiveRestaurantId(id)}
                    isActive={id === activeRestaurantId}
                />
            ))}

            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
            {activeRestaurant && <Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
        </main>
    )
}