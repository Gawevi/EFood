import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Food = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button size={'big'} title={'Adicionar ao carrinho'}>
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Food
