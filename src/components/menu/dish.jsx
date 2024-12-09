import styles from './menu.module.css'

export const Dish = ({ name, price, ingredients }) => {
    return (
        <>
            <p className={styles.name} >{name}</p>
            <p className={styles.ingredients} >{ingredients.join(', ')}</p>
            <p className={styles.price} >{price + '.00 $'}</p>
        </>
    )
}