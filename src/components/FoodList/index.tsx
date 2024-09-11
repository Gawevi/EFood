import FoodModel from '../../models/Food'
import Food from '../Food'
import { Container, List } from './styles'

type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <Food
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
        />
      ))}
    </List>
  </Container>
)

export default FoodList
