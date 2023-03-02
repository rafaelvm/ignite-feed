import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<Partial<DefaultTheme>>`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray[300]};
  -webkit-font-smoothing: antialiased;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button {
  cursor: pointer;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
}


[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
  &:hover {
    opacity: 0.2;
  }
}

`
