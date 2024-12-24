import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../counter/counter';
import { addToCart, removeFromCart, selectCartItemAmountById } from '../../redux/ui/cart/cart-slice';

export const CartCounter = ({ id }) => {
    const dispatch = useDispatch();

    const amount =
        useSelector((state) => selectCartItemAmountById(state, id)) || 0;

    const increase = () => dispatch(addToCart(id));
    const decrease = () => dispatch(removeFromCart(id));

    return <Counter value={amount} decrease={decrease} increase={increase} />
}