import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>А это футер, но кажется в макете сайта его нет.</p>
        </footer>
    )
}