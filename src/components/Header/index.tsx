import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Imagem, Titulo } from './styles'
import { Logo } from '../../styles'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <div>
        <Logo src={logo} alt="EFood" />
      </div>
      <Titulo>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Titulo>
    </div>
  </Imagem>
)

export default Header
