import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 64px 172px;
`

export const Image = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin: 0;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.laranja};
  margin-top: 32px;
  margin-bottom: 16px;
`
