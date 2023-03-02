import { FunctionComponent } from 'react'
import { SidebarProps } from './Sidebar.types'
import {
  Avatar,
  Container,
  Footer,
  Image,
  Link,
  Profession,
  ProfileWrapper,
  UserName,
} from './Sidebar.styles'
import { PencilLine as PencilLineIcon } from 'phosphor-react'

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <ProfileWrapper>
        <Avatar src="https://github.com/rafaelvm.png" />
        <UserName>Rafael Vieira</UserName>
        <Profession>Web Developer</Profession>
      </ProfileWrapper>

      <Footer>
        <Link href="#">
          <PencilLineIcon size={20} />
          Editar seu perfil
        </Link>
      </Footer>
    </Container>
  )
}
