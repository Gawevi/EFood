import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeaderContainer, Image, Quantity, Titulo } from './styles'
import { Logo } from '../../styles'

const HeaderPerfil = () => {
  const items = useSelector((state: RootReducer) => state.cart.items)

  return (
    <Image style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer>
        <Titulo>Restaurantes</Titulo>
        <Logo src={logo} alt="EFood" />
        <div>
          <Quantity>{items.length} produto(s) no carrinho</Quantity>
        </div>
      </HeaderContainer>
    </Image>
  )
}

export default HeaderPerfil
