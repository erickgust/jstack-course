import React, { useContext } from 'react'
import { ToggleThemeContext } from '../../root'
import { Container } from './header-styles'

function Header () {
  const { theme, handleToggleTheme } = useContext(ToggleThemeContext)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}

export { Header }
