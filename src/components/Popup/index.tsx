import { useState } from 'react'
import { ModalContent, Modal } from './styles'
import Button from '../Button'
import fechar from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Comidas } from '../../pages/Perfil'

type Props = {
  titulo: string
  descricao: string
  porcao: string
  preco: string
  foto: string
  comida?: Comidas
}

export interface ModalState {
  isVisible: boolean
}

const Popup = ({ comida, descricao, foto, porcao, preco, titulo }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = () => {
    setModal({
      isVisible: true
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const addToCart = () => {
    if (comida) {
      dispatch(add(comida))
      dispatch(open())
    } else {
      alert('Erro')
    }
  }

  return (
    <>
      <div onClick={openModal}>
        <Button size={'big'} title={'Adicionar ao carrinho'}>
          Adicionar ao carrinho
        </Button>
      </div>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <img className="imagemPrincipal" src={foto} alt={titulo} />
          <div className="containerParaCard">
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>Serve: de {porcao}</p>
            <div onClick={addToCart}>
              <Button size={'big'} title={'Adicionar ao Carrinho'}>
                Adicionar ao Carrinho - {preco}
              </Button>
            </div>
          </div>
          <div className="containerFechar">
            <img
              className="close"
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Popup
