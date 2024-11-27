import { CartCounter } from '../cart-counter/cart-counter'
import styles from './menu.module.css'

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Menu</h3>
            <ul className={styles.dishCard}>
                {menu.map((dish) => (
                    <li key={dish.id} className={styles.dish} >
                        <div>
                            <p className={styles.name} >{dish.name}</p>
                            <p className={styles.ingredients} >{dish.ingredients.join(', ')}</p>
                            <p className={styles.price} >{dish.price + '.00 $'}</p>
                        </div>
                        <CartCounter />
                    </li>
                ))}
            </ul>
        </>
    )
}