import { FunctionComponent } from 'react'
import { HeaderProps } from './Header.types'
import { Container } from './Header.styles'
import { ReactComponent as IgniteLogo } from '@/assets/ignite-logo.svg'

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Container>
      <IgniteLogo />
    </Container>
  )
}
