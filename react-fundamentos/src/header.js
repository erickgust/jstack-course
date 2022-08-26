import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'
import { ThemeContext } from './contexts/theme'

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div style={{
      backgroundColor: '#eee',
      fontFamily: 'sans-serif',
      marginBottom: '1rem'
    }}>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>Theme</Button>
      {children}
    </div>
  )
}

Header.defaultProps = {
  title: 'JStack\'s blog'
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}