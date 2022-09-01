import styled from 'styled-components'

export const Container = styled.article`
  margin-bottom: 1.5rem;

  opacity: ${({ removed }) => removed ? 0.7 : 1};
`

export const Subtitle = styled.small`
  display: block;
`

export const Rate = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
`