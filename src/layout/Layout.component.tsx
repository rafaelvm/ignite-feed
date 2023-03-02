import { Header } from '@/components/Header/Header.component'
import { Post } from '@/components/Post/Post.component'
import { Sidebar } from '@/components/Sidebar/Sidebar.component'
import { Wrapper } from './Layout.styles'

export const Layout = () => {
  return (
    <div>
      <Header />

      <Wrapper>
        <Sidebar />

        <main>
          <Post
            author="Lore"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, provident delectus tempora cupiditate nisi expedita ad temporibus, quae sit doloremque fuga ipsum qui nemo voluptatem ipsam saepe repellendus nihil aperiam."
          />
        </main>
      </Wrapper>
    </div>
  )
}
