import React from 'react'
import { useHistory } from 'react-router-dom'
import { useToggleTheme } from '../../hooks/useToggleTheme'
import { Container } from './header-styles'

function Header() {
  const { theme, handleToggleTheme } = useToggleTheme()
  const history = useHistory()

  function handleNavigate() {
    history.push('/posts')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>

      <button
        onClick={handleNavigate}
        style={{ color: '#FFF' }}
      >
        Ir para posts
      </button>

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
