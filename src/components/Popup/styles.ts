import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 0;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};
  padding: 32px;
  width: 1024px;
  height: 344px;
  display: flex;
  align-items: center;

  .containerParaCard {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  .imagemPrincipal {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .close {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  .containerFechar {
    position: absolute;
    margin-right: 8px;
    margin-left: 970px;
    margin-top: 8px;
    margin-bottom: 320px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: ${cores.branco};
    margin-bottom: 16px;
  }

  button {
    width: 222px;
    height: 24px;
  }
`
