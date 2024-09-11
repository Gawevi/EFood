import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.branco};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    margin-left: 172px;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900 bold;
  margin-bottom: 32px;
`

export const Categoria = styled.h3`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 160px;
  margin-top: 24px;
`
