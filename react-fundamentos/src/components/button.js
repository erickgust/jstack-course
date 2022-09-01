import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/theme'

export function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext)
  
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme === 'dark' ? '#111' : '#eee',
        color: theme === 'dark' ? '#eee' : '#111',
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}