import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import { ProgressBar } from "../progress-bar/progress-bar"
import { Cart } from "../cart/cart"
import { useAuth } from "../autn-context/use-auth"

export const Layout = ({ children }) => {
    const isAuthorized = useAuth();

    return (
        <>
            <ProgressBar />
            <Header />
            {children}
            {isAuthorized && <Cart />}
            <Footer />
        </>
    )
}