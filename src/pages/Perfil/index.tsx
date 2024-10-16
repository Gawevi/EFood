import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'

export type Comidas = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <Banner
          imagem={restaurant.capa}
          categoria={restaurant.tipo}
          titulo={restaurant.titulo}
        />
        <FoodList foods={restaurant.cardapio} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Perfil
