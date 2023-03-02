import { FunctionComponent } from 'react'
import { PostProps } from './Post.types'
import {
  AuthorInfo,
  Avatar,
  Container,
  ContentWrapper,
  Header,
  InfoWrapper,
  CommentForm,
  Textarea,
  Button,
  Footer,
} from './Post.styles'

export const Post: FunctionComponent<PostProps> = ({ author, content }) => {
  return (
    <Container>
      <Header>
        <InfoWrapper>
          <Avatar src="https://github.com/rafaelvm.png" />

          <AuthorInfo>
            <strong>Rafael Vieira</strong>
            <span>Web Developer</span>
          </AuthorInfo>
        </InfoWrapper>

        <time title="10 de maio as 08:13h" dateTime="2022-05-10 08:13:30">
          Publicado ha 1h
        </time>
      </Header>

      <ContentWrapper>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </ContentWrapper>

      <CommentForm>
        <strong>Deixe seu feedback</strong>

        <Textarea placeholder="Deixe um comentário" />

        <Footer>
          <Button type="submit">Publicar</Button>
        </Footer>
      </CommentForm>
    </Container>
  )
}
