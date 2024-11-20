export const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>AnyFood</h1>
                <p>Это хедер. h1 тут не типичная ситуация, но вдруг... Зато похоже на макет.</p>
            </header>
            {children}
            <footer>
                <p>А это футер, но кажется в макете сайта его нет.</p>
            </footer>
        </>
    )
}