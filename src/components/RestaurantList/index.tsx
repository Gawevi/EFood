import Restaurant from '../Restaurant'
import { Container, List } from './styles'
import { Restaurantes } from '../../pages/Home'

export type Props = {
  restaurantes: Restaurantes[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getRestaurantTags = (restaurante: Restaurantes) => {
    const tags = []

    if (restaurante.destacado === true) {
      tags.push('Destaque da semana')
    }
    if (restaurante.tipo) {
      tags.push(
        `${restaurante.tipo.charAt(0).toUpperCase()}${restaurante.tipo.slice(
          1
        )}`
      )
    }

    return tags
  }

  return (
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurant
              title={restaurante.titulo}
              nota={restaurante.avaliacao}
              description={restaurante.descricao}
              image={restaurante.capa}
              tags={getRestaurantTags(restaurante)}
              id={restaurante.id}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}
export default RestaurantList
