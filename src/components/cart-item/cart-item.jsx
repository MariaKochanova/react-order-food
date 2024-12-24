import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dishes/dishes-slice"
import { CartCounter } from "../cart-counter/cart-counter"

export const CartItem = ({ id }) => {
    console.log(id);
    
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish.name) {
        return null
    }

    return (
        <div>
            {dish.name}
            <CartCounter id={id} />
        </div>
    )
}