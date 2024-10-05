import { useState } from 'react'
import { ModalContent, Modal } from './styles'
import Button from '../Button'
import fechar from '../../assets/images/close.png'

type Props = {
  titulo: string
  descricao: string
  porcao: string
  preco: string
  foto: string
}

export interface ModalState {
  isVisible: boolean
}

const Popup = ({ descricao, foto, porcao, preco, titulo }: Props) => {
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
            <div>
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
