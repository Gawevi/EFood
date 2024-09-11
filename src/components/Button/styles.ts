import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) => (props.size === 'big' ? cores.laranja : cores.bege)};
  background-color: ${(props) =>
    props.size === 'big' ? cores.bege : cores.laranja};
  font-size: 14px;
  padding: 8px;
  width: ${(props) => (props.size === 'big' ? '304px' : '88px')};
  height: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
`
