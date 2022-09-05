import styled, { css } from 'styled-components'

export const Container = styled.footer`${({ theme }) => css`
  background: ${({ theme }) => theme.backgroundLayer1};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.large + 'px'};
  border-radius: ${theme.borderRadius};
  justify-content: space-between;
  margin-top: ${theme.spacing.large + 'px'};

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`}`
