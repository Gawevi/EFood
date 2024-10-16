import { ButtonContainer } from './styles'

export type Props = {
  size: 'small' | 'big'
  title: string
  to?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ size, title, to, children }: Props) => (
  <ButtonContainer size={size} title={title} to={to as string}>
    {children}
  </ButtonContainer>
)

export default Button
