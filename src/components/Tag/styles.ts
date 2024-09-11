import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  margin-right: ${(props) => (props.type === 'comum' ? '16px' : '8px')};
  display: inline-block;
  height: 26px;
  width: ${(props) => (props.type === 'comum' ? '61px' : '121px')};
  padding: 6px 4px;
`
