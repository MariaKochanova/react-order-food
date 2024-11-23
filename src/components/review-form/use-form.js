import { useReducer } from 'react'

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 5,
}

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const INCREASE_RATING_ACTION = "INCREASE_RATING_ACTION";
const DECREASE_RATING_ACTION = "DECREASE_RATING_ACTION";
const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...state, name: payload };
        case SET_TEXT_ACTION:
            return { ...state, text: payload };
        case INCREASE_RATING_ACTION:
            return { ...state, rating: Math.min(state.rating + 1, 5) };
        case DECREASE_RATING_ACTION:
            return { ...state, rating: Math.max(state.rating - 1, 1) };
        case CLEAR_ACTION:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const setName = (name) => {
        dispatch({ type: 'SET_NAME', payload: name });
    }

    const setText = (text) => {
        dispatch({ type: 'SET_TEXT', payload: text });
    }

    const increaseRating = () => {
        dispatch({ type: INCREASE_RATING_ACTION });
    };

    const decreaseRating = () => {
        dispatch({ type: DECREASE_RATING_ACTION });
    };

    const clear = () => {
        dispatch({ type: CLEAR_ACTION });
    };


    return {
        form,
        setName,
        setText,
        increaseRating,
        decreaseRating,
        clear,
    }
}