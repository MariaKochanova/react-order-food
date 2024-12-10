import { useAuth } from '../autn-context/use-auth.js'
import { CartCounter } from '../cart-counter/cart-counter'
import { DishContainer } from './dish-container.jsx';
import styles from './menu.module.css'

export const Menu = ({ menuIds }) => {
    const { auth } = useAuth();

    return (
        <>
            <h3>Menu</h3>
            <ul className={styles.dishCard}>
                {menuIds.map((id) => (
                    <li key={id} className={styles.dish} >
                        <div>
                           <DishContainer id={id} />
                        </div>
                        {auth.isAuthorized && <CartCounter />}
                    </li>
                ))}
            </ul>
        </>
    )
}