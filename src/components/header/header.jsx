import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Any <span className={styles.titleLine}>F<span className={styles.titleYellow}>oo</span>d</span></h1>
        </header>
    )
}