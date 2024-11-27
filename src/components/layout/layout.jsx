import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { ProgressBar } from "../progress-bar/progress-bar"

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </>
    )
}