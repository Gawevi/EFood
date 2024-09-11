import { Categoria, Imagem, Titulo } from './styles'
import bannerImg from '../../assets/images/fundo_italiano.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
