import styled, { css } from 'styled-components'

export const Container = styled.section`${({ theme }) => css`
  margin-top: ${theme.spacing.large + 'px'};
`}`
