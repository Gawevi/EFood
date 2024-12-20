import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  ContainerEntrega,
  Overlay,
  Prices,
  Sidebar,
  CepNumero,
  ContainerPagamento,
  ContainerConfirmacao
} from './styles'
import { close, remove, clear } from '../../store/reducers/cart'
import { formataPreco } from '../RestaurantList'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [isDeliveryMode, setIsDeliveryMode] = useState(false)
  const [isPaymentMode, setIsPaymentMode] = useState(false)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    address: '',
    city: '',
    zipcode: '',
    number: '',
    complement: ''
  })
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    number: '',
    code: '',
    expires: { month: '', year: '' }
  })
  const [orderID, setOrderID] = useState<string | null>(null)
  const [purchase, { isLoading, data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setIsDeliveryMode(false)
    setIsPaymentMode(false)
    setIsOrderConfirmed(false)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const clearCart = () => {
    dispatch(clear())
    closeCart()
  }

  const entrega = () => {
    setIsDeliveryMode(true)
  }

  const pagamento = () => {
    setIsPaymentMode(true)
  }

  const finalizarPedido = async () => {
    const payload = {
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      })),
      delivery: {
        receiver: deliveryInfo.receiver,
        address: {
          description: deliveryInfo.address,
          city: deliveryInfo.city,
          zipCode: deliveryInfo.zipcode,
          number: Number(deliveryInfo.number),
          complement: deliveryInfo.complement
        }
      },
      payment: {
        card: {
          name: paymentInfo.name,
          number: paymentInfo.number,
          code: Number(paymentInfo.code),
          expires: {
            month: Number(paymentInfo.expires.month),
            year: Number(paymentInfo.expires.year)
          }
        }
      }
    }

    try {
      const response = await purchase(payload).unwrap()
      setOrderID(response.orderID)
      setIsOrderConfirmed(true)
    } catch (err) {
      console.error('Erro ao concluir pedido:', err)
    }
    setIsPaymentMode(false)
    setIsOrderConfirmed(true)
  }

  const handleDeliveryChange = (field: string, value: string) => {
    setDeliveryInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handlePaymentChange = (field: string, value: string) => {
    if (field === 'month' || field === 'year') {
      setPaymentInfo((prev) => ({
        ...prev,
        expires: { ...prev.expires, [field]: value }
      }))
    } else {
      setPaymentInfo((prev) => ({ ...prev, [field]: value }))
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {!isDeliveryMode && !isPaymentMode && !isOrderConfirmed && (
        <>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total <span>{formataPreco(getTotalPrice())}</span>
            </Prices>
            <div onClick={() => entrega()}>
              <Button
                title="Clique aqui para continuar com a compra"
                size={'big'}
              >
                Continuar com a entrega
              </Button>
            </div>
          </Sidebar>
        </>
      )}

      {isDeliveryMode && !isPaymentMode && !isOrderConfirmed && (
        <>
          <Overlay
            onClick={() => {
              closeCart()
            }}
          />
          <Sidebar>
            <ContainerEntrega>
              <h2>Entrega</h2>
              <form className="entrega-form">
                <label>Quem irá receber</label>
                <input
                  type="text"
                  value={deliveryInfo.receiver}
                  onChange={(e) =>
                    handleDeliveryChange('receiver', e.target.value)
                  }
                />

                <label>Endereço</label>
                <input
                  type="text"
                  value={deliveryInfo.address}
                  onChange={(e) =>
                    handleDeliveryChange('address', e.target.value)
                  }
                />

                <label>Cidade</label>
                <input
                  type="text"
                  value={deliveryInfo.city}
                  onChange={(e) => handleDeliveryChange('city', e.target.value)}
                />

                <CepNumero>
                  <div>
                    <label>CEP</label>
                    <input
                      type="text"
                      value={deliveryInfo.zipcode}
                      onChange={(e) =>
                        handleDeliveryChange('zipcode', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Número</label>
                    <input
                      type="text"
                      value={deliveryInfo.number}
                      onChange={(e) =>
                        handleDeliveryChange('number', e.target.value)
                      }
                    />
                  </div>
                </CepNumero>

                <label>Complemento (opcional)</label>
                <input
                  type="text"
                  value={deliveryInfo.complement || ''}
                  onChange={(e) =>
                    handleDeliveryChange('complement', e.target.value)
                  }
                />

                <button
                  type="button"
                  className="botao-pagamento"
                  onClick={() => setIsPaymentMode(true)}
                >
                  Continuar com o pagamento
                </button>
                <button
                  type="button"
                  className="botao-carrinho"
                  onClick={pagamento}
                >
                  Voltar para o carrinho
                </button>
              </form>
            </ContainerEntrega>
          </Sidebar>
        </>
      )}

      {isPaymentMode && !isOrderConfirmed && (
        <>
          <Overlay
            onClick={() => {
              closeCart()
            }}
          />
          <Sidebar>
            <ContainerPagamento>
              <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
              <form className="pagamento-form">
                <label>Nome no cartão</label>
                <input
                  type="text"
                  value={paymentInfo.name}
                  onChange={(e) => handlePaymentChange('name', e.target.value)}
                />

                <div className="numeroCartao">
                  <div className="numero">
                    <label>Número do cartão</label>
                    <input
                      type="text"
                      value={paymentInfo.number}
                      onChange={(e) =>
                        handlePaymentChange('number', e.target.value)
                      }
                    />
                  </div>
                  <div className="codigo">
                    <label>CVV</label>
                    <input
                      type="text"
                      value={paymentInfo.code}
                      onChange={(e) =>
                        handlePaymentChange('code', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="vencimento">
                  <div className="mes">
                    <label>Mês de vencimento</label>
                    <input
                      type="text"
                      value={paymentInfo.expires.month}
                      onChange={(e) =>
                        handlePaymentChange('month', e.target.value)
                      }
                    />
                  </div>
                  <div className="ano">
                    <label>Ano de vencimento</label>
                    <input
                      type="text"
                      value={paymentInfo.expires.year}
                      onChange={(e) =>
                        handlePaymentChange('year', e.target.value)
                      }
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="botao-pagamento"
                  onClick={finalizarPedido}
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                </button>
                <button
                  type="button"
                  className="botao-voltar"
                  onClick={() => setIsPaymentMode(false)}
                >
                  Voltar para a edição de endereço
                </button>
              </form>
            </ContainerPagamento>
          </Sidebar>
        </>
      )}

      {isOrderConfirmed && (
        <>
          <Overlay
            onClick={() => {
              closeCart()
            }}
          />
          <Sidebar>
            <ContainerConfirmacao>
              <h2>Pedido realizado - {data?.orderID}</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <button className="botao-concluir" onClick={clearCart}>
                Concluir
              </button>
            </ContainerConfirmacao>
          </Sidebar>
        </>
      )}
    </CartContainer>
  )
}

export default Cart
