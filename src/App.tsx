import { BrowserRouter, useLocation } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderPerfil from './components/HeaderPerfil'

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
    <BrowserRouter>
      <GlobalCss />
      <Layout />
    </BrowserRouter>
  )
}

export default App
