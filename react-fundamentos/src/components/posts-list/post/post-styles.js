import styled, { css } from 'styled-components'

export const Container = styled.article`${({ theme }) => css`
  background: ${({ theme }) => theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.medium + 'px'};
  border-radius: ${theme.borderRadius};

  h2 {
    margin: 0;
    margin-bottom: ${theme.spacing.small + 'px'};
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: ${theme.spacing.small + 'px'};
  }
`}`
