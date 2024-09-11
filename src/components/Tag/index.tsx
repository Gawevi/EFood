import { TagContainer } from './styles'

export type Props = {
  children: string
  type?: 'destaque' | 'comum'
}

const Tag = ({ children, type = 'comum' }: Props) => (
  <TagContainer type={type}>{children}</TagContainer>
)

export default Tag
