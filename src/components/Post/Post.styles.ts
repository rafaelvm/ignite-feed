import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.gray[800]};
    border-radius: 8px;
    padding: 2.5rem;

    & + article {
      margin-top: 2rem;
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > time {
      font-size: 0.875rem;
      color: ${theme.colors.gray[400]};
    }
  `}
`
export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`
export const Avatar = styled.img`
  ${({ theme }) => css`
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid ${theme.colors.gray[800]};
    outline: 2px solid ${theme.colors.green[500]};
  `}
`
export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    strong {
      display: block;
      color: ${theme.colors.gray[100]};
      line-height: 1.6;
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${theme.colors.gray[400]};
      line-height: 1.6;
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    line-height: 1.6;
    color: ${theme.colors.gray[300]};
    margin-top: 1.5rem;

    p {
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: ${theme.colors.green[500]};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.green[300]};
      }
    }
  `}
`

export const CommentForm = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${theme.colors.gray[600]};

    > strong {
      line-height: 1.6;
      color: ${theme.colors.gray[100]};
    }

    :focus-within footer {
      visibility: visible;
      max-height: none;
    }
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.gray[900]};
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${theme.colors.gray[100]};
    line-height: 1.4;
    margin-top: 1rem;
  `}
`

export const Footer = styled.footer`
  ${css`
    visibility: hidden;
    max-height: 0;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: ${theme.colors.green[500]};
    color: ${theme.colors.white};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s;

    :hover {
      background: ${theme.colors.green[300]};
    }
  `}
`
