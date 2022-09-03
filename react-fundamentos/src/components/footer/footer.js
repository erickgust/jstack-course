import React, { useContext } from 'react'
import { ToggleThemeContext } from '../../root'
import { Container } from './footer-styles'

function Footer () {
  const { theme, handleToggleTheme } = useContext(ToggleThemeContext)

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
