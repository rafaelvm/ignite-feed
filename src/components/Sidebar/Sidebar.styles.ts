import styled, { css } from 'styled-components'

export const Container = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.gray[800]};
    border-radius: 8px;
    overflow: hidden;
  `}
`

export const Image = styled.img`
  ${css`
    width: 100%;
    height: 72px;
    object-fit: cover;
  `}
`

export const ProfileWrapper = styled.div`
  ${css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
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

export const UserName = styled.strong`
  ${({ theme }) => css`
    margin-top: 1rem;
    line-height: 1.6;
    color: ${theme.colors.gray[100]};
  `}
`

export const Profession = styled.span`
  ${({ theme }) => css`
    font-size: 0.85rem;
    color: ${theme.colors.gray[400]};
    line-height: 1.6;
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[600]};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    color: ${theme.colors.green[500]};
    border: 1px solid ${theme.colors.green[500]};
    border-radius: 8px;
    height: 50px;
    padding: 0 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: color 0.1s, background-color 0.1s;

    :hover {
      background-color: ${theme.colors.green[500]};
      color: ${theme.colors.white};
    }
  `}
`
