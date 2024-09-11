import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  margin-right: 80px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.laranja};
  width: 472px;
  height: 400px;
  position: relative;

  a {
    color: ${cores.branco};
    text-decoration: none;
  }

  img {
    display: block;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ContainerParaTag = styled.div`
  position: absolute;
  top: 16px;
  right: 0px;
`

export const ContainerParaBotao = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin: 16px 8px;
  line-height: 22px;
`

export const Nota = styled.h3`
  font-size: 18px;
  margin-top: 8px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;

  img {
    margin-left: 4px;
    vertical-align: middle;
  }
`
