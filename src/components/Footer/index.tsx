import { Logo } from '../../styles'
import { Container, CardContainer, CardSocial } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="EFood" />
      <CardContainer>
        <CardSocial src={instagram} alt="Instagram" />
        <CardSocial src={facebook} alt="Facebook" />
        <CardSocial src={twitter} alt="Twitter" />
      </CardContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default Footer
