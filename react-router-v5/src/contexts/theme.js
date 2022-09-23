import React, { createContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import themes from '../styles/themes'

export const ToggleThemeContext = createContext(null)

export function ToggleThemeProvider ({ children }) {
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme ?? 'dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleToggleTheme () {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ToggleThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

ToggleThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
