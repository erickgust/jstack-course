import styled, { css } from 'styled-components'

export const Container = styled.article`${({ removed }) => css`
  margin-bottom: 1.5rem;

  opacity: ${removed ? 0.7 : 1};
  color: ${removed ? '#DC143C' : '#FFF'};
`}`

export const Subtitle = styled.small`
  display: block;
`

export const Rate = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
`