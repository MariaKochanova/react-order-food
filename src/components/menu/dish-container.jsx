import { useSelector } from "react-redux";
import { selectDisheById } from "../../redux/entities/dishes/dishes-slice";
import { Dish } from "./dish";

export const DishContainer = ({ id }) => {
    const dish = useSelector((state) => selectDisheById(state, id))

    if (!dish.name) {
        return null;
    }

    return (
        <Dish name={dish.name} price={dish.price} ingredients={dish.ingredients} />
    )
}