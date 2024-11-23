import { ProgressBar } from "../progress-bar/progress-bar"

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar viewVariant='colored' />
            <header>
                <h1>AnyFood</h1>
                <p>Это хедер.</p>
            </header>
            {children}
            <footer>
                <p>А это футер, но кажется в макете сайта его нет.</p>
            </footer>
        </>
    )
}