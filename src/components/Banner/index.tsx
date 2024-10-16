import { Categoria, Imagem, Titulo } from './styles'

type Props = {
  imagem: string
  categoria: string
  titulo: string
}

const Banner = ({ imagem, categoria, titulo }: Props) => (
  <Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <div className="teste">
        <Categoria>
          {categoria.charAt(0).toUpperCase()}
          {categoria.slice(1)}
        </Categoria>
        <Titulo>{titulo}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
