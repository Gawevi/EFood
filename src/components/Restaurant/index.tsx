import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  Descricao,
  Titulo,
  Nota,
  ContainerParaTag,
  ContainerParaBotao
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  nota: number
  description: string
  image: string
  tags: string[]
}

const Restaurant = ({ title, nota, description, image, tags }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      <Titulo>{title}</Titulo>
      <Nota>
        {nota} <img src={estrela} alt="estrela" />
      </Nota>
    </div>
    <ContainerParaTag>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          type={tag === 'Destaque da semana' ? 'destaque' : 'comum'}
        >
          {tag}
        </Tag>
      ))}
    </ContainerParaTag>
    <Descricao>{description}</Descricao>
    <ContainerParaBotao>
      <Button size={'small'} title={'Saiba mais'}>
        <Link to="/perfil">Saiba mais</Link>
      </Button>
    </ContainerParaBotao>
  </Card>
)

export default Restaurant
