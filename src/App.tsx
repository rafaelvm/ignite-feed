import { ThemeProvider } from 'styled-components'
import { Layout } from '@/layout/Layout.component'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}
