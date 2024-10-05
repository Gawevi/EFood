import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  padding: 8px;
  color: ${cores.begeEscuro};
  width: 320px;
  height: 346px;
  margin-bottom: 32px;

  button {
    width: 304px;
    height: 24px;
  }

  img {
    width: 304px;
    height: 168px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
  display: block;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
`
