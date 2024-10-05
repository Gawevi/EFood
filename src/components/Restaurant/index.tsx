import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  Descricao,
  Titulo,
  Nota,
  ContainerParaTag,
  ContainerParaBotao,
  ContainerParaNota
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  nota: number
  description: string
  image: string
  tags: string[]
  id: number
}

const Restaurant = ({ title, nota, description, image, tags, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <ContainerParaNota>
        <Titulo>{title}</Titulo>
        <Nota>
          {nota} <img src={estrela} alt="estrela" />
        </Nota>
      </ContainerParaNota>
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
      <Descricao>{getDescricao(description)}</Descricao>
      <ContainerParaBotao>
        <Button size={'small'} title={'Saiba mais'}>
          <Link to={`/perfil/${id}`}>Saiba mais</Link>
        </Button>
      </ContainerParaBotao>
    </Card>
  )
}

export default Restaurant
