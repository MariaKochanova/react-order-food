import { Counter } from '../counter/counter';
import { useCount } from './use-counter';

export const CartCounter = () => {
    const { value, decrease, increase } = useCount();

    return <Counter value={value} decrease={decrease} increase={increase} />
}