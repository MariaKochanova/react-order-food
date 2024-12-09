import { Provider } from 'react-redux'
import { RestaurantsPage } from './components/restaurants-page/restaurants-page.jsx'
import { Layout } from './components/layout/layout.jsx'
import { ThemeContextProvider } from './components/theme-context/theme-context.jsx'
import { AuthContextProvider } from './components/autn-context/auth-context.jsx'
import { store } from './redux/store.js'
import './app.css'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Layout>
                        <RestaurantsPage />
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
}