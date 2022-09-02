import PropTypes from 'prop-types'
import React, { useState, createContext } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('dark')

  function handleToggleTheme () {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
