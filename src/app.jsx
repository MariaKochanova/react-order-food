import { RestaurantsPage } from './components/restaurants-page/restaurants-page.jsx'
import { Layout } from './components/layout/layout.jsx'
import './app.css'
import { ThemeContextProvider } from './components/theme-context/theme-context.jsx'
import { AuthContextProvider } from './components/autn-context/auth-context.jsx'

export const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <Layout>
                    <RestaurantsPage />
                </Layout>
            </AuthContextProvider>
        </ThemeContextProvider>
    )
}