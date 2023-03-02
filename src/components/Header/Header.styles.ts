import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray[800]};
    display: flex;
    justify-content: center;
    padding: 1.25rem 0;

    svg {
      height: 2rem;
    }
  `}
`
