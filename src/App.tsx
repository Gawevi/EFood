import { BrowserRouter, useLocation } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderPerfil from './components/HeaderPerfil'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function Layout() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? <Header /> : <HeaderPerfil />}
      <Rotas />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Layout />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
