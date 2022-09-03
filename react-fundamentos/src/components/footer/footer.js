import React from 'react'
import { useToggleTheme } from '../../hooks/useToggleTheme'
import { Container } from './footer-styles'

function Footer () {
  const { theme, handleToggleTheme } = useToggleTheme()

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}

export { Footer }
