import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlise } from "./entities/restaurants/restaurants-slice"
import { reviewsSlise } from "./entities/reviews/reviews-slice"
import { dishesSlise } from "./entities/dishes/dishes-slice"
import { usersSlise } from "./entities/users/users-slice"

export const store = configureStore({
    reducer: {
        [restaurantsSlise.name]: restaurantsSlise.reducer,
        [reviewsSlise.name]: reviewsSlise.reducer,
        [dishesSlise.name]: dishesSlise.reducer,
        [usersSlise.name]: usersSlise.reducer,
    },
})