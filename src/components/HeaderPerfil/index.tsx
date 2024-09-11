import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeaderContainer, Image, Titulo } from './styles'
import { Logo } from '../../styles'

const HeaderPerfil = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <HeaderContainer>
      <Titulo>Restaurantes</Titulo>
      <Logo src={logo} alt="EFood" />
      <Titulo>0 produto(s) no carrinho</Titulo>
    </HeaderContainer>
  </Image>
)

export default HeaderPerfil
