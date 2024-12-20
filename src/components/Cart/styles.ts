import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 344px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.begeEscuro};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  background-color: ${cores.begeEscuro};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-left: 8px;
    margin:top: 8px;
    margin:bottom: 12px;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.laranja};
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${cores.laranja};
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ContainerEntrega = styled.div`
  padding-left: 8px;
  margin: 0 auto;
  color: ${cores.bege};

  h2 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 8px;
  }

  form {
    label {
      display: block;
    }

    input {
      width: 328px;
      height: 32px;
      padding: 8px;
      margin: 5px 0 10px;
      border: none;
      border-radius: 4px;
      background-color: ${cores.bege};
      color: black;
      font-size: 14px;
    }
  }

  .botao-pagamento,
  .botao-carrinho {
    width: 328px;
    height: 24px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    color: ${cores.laranja};
    cursor: pointer;
  }

  .botao-pagamento {
    margin-bottom: 8px;
    margin-top: 24px;
  }
`

export const CepNumero = styled.div`
    display: flex;
    justify-content: space-between;

    div {
      width: 48%;

      input {
        width: 155px;
      }
    }
  }
`

export const ContainerPagamento = styled.div`
  padding-left: 8px;
  margin: 0 auto;
  color: ${cores.bege};

  h2 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  form {
    label {
      display: block;
    }

    input {
      width: 328px;
      height: 32px;
      padding: 8px;
      margin: 5px 0 10px;
      border: none;
      border-radius: 4px;
      background-color: ${cores.bege};
      color: black;
      font-size: 14px;
    }

    .numeroCartao {
      display: flex;

      .numero {
        margin-right: 30px;

        input {
          width: 220px;
        }
      }

      .codigo {
        input {
          width: 80px;
        }
      }
    }

    .vencimento {
      display: flex;

      .mes {
        margin-right: 30px;
        input {
          width: 150px;
        }
      }

      .ano {
        input {
          width: 150px;
        }
      }
    }

    .botao-pagamento,
    .botao-voltar {
      width: 328px;
      height: 24px;
      border: none;
      font-weight: bold;
      font-size: 14px;
      color: ${cores.laranja};
      cursor: pointer;
    }

    .botao-pagamento {
      margin-bottom: 8px;
      margin-top: 24px;
    }
  }
`

export const ContainerConfirmacao = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  color: ${cores.bege};

  h2 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 22px;
  }

  .botao-concluir {
    width: 328px;
    height: 24px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    color: ${cores.laranja};
    cursor: pointer;
  }
`
