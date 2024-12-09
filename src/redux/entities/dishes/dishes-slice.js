import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;

        return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlise = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDisheById: (state, id) => state.entities[id],
    }
});

export const { selectDishesIds, selectDisheById } = dishesSlise.selectors;