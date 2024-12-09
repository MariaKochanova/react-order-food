import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock"

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlise = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
    }
});

export const { selectRestaurantsIds, selectRestaurantById } = restaurantsSlise.selectors;