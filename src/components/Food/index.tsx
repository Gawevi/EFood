import Popup from '../Popup'
import { Card, Descricao, Titulo } from './styles'
import { formataPreco } from '../RestaurantList'

type Props = {
  title: string
  description: string
  image: string
  portion: string
  price: number
}

const Food = ({ title, description, image, portion, price }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Popup
          titulo={title}
          descricao={description}
          porcao={portion}
          preco={formataPreco(price)}
          foto={image}
        />
      </Card>
    </>
  )
}

export default Food
