import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 40px 0px;
  background-color: ${cores.begeEscuro};
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
  }
`

export const CardContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;
`

export const CardSocial = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`
