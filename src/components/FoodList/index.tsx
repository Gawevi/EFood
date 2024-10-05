import { Comidas } from '../../pages/Perfil'
import Food from '../Food'
import { Container, List } from './styles'

export type Props = {
  foods: Comidas[]
}

const FoodList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <li key={food.id}>
          <Food
            title={food.nome}
            description={food.descricao}
            image={food.foto}
            portion={food.porcao}
            price={food.preco}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default FoodList
