import styles from './user.module.css'

export const User = ({ name }) => {
    return (
        <p className={styles.username}>{name}</p>
    )
}