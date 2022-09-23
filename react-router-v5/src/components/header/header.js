import React from 'react'
import { useToggleTheme } from '../../hooks/useToggleTheme'
import { Container } from './header-styles'

function Header () {
  const { theme, handleToggleTheme } = useToggleTheme()

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
