import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) => (props.size === 'small' ? cores.bege : cores.laranja)};
  background-color: ${(props) =>
    props.size === 'small' ? cores.laranja : cores.begeEscuro};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  width: ${({ size }) => (size === 'big' ? '304px' : '88px')}
  height: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
`
