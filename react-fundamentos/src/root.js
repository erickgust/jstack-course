import React, { useMemo, useState } from 'react'

import { GlobalStyle } from './styles/global'
import { Layout } from './components/layout'
import { ThemeProvider } from 'styled-components'

import themes from './styles/themes'

function Root () {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme () {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} theme={theme} />
    </ThemeProvider>
  )
};

export { Root }
