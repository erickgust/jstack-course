import React, { createContext, useMemo, useState } from 'react'

import { GlobalStyle } from './styles/global'
import { Layout } from './components/layout'
import { ThemeProvider } from 'styled-components'

import themes from './styles/themes'

export const ToggleThemeContext = createContext(null)

function ToggleThemeProvider ({ children }) {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
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

function Root () {
  return (
    <ToggleThemeProvider>
      <GlobalStyle />
      <Layout />
    </ToggleThemeProvider>
  )
};

export { Root }
