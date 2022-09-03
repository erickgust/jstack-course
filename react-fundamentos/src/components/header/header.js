import React from 'react'
import { Container } from './header-styles'

function Header ({ onToggleTheme, theme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>{theme === 'dark' ? '🌞' : '🌚'}</button>
    </Container>
  )
}

export { Header }
