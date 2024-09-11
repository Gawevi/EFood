import Restaurant from '../Restaurant'
import Restaurants from '../../models/Restaurants'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          title={restaurant.title}
          nota={restaurant.nota}
          description={restaurant.description}
          image={restaurant.image}
          tags={restaurant.tags}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
