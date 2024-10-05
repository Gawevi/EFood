import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import { Restaurantes } from '../Home'

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

  const [restaurant, setRestaraunt] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaraunt(res))
  }, [id])

  return (
    <>
      {restaurant && (
        <Banner
          imagem={restaurant.capa}
          categoria={restaurant.tipo}
          titulo={restaurant.titulo}
        />
      )}
      {restaurant && <FoodList foods={restaurant.cardapio} />}
    </>
  )
}
export default Perfil
