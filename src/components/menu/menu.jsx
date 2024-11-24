import { CartCounter } from '../cart-counter/cart-counter'

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li key={dish.id}>
                        <p>{dish.name}</p>
                        <p>{dish.ingredients.join(', ')}</p>
                        <p>{dish.price + '.00 $'}</p>
                        <CartCounter />
                    </li>
                ))}
            </ul>
        </>
    )
}