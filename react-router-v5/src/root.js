import React from 'react'

import { GlobalStyle } from './styles/global'
import { Layout } from './components/layout'
import { ToggleThemeProvider } from './contexts/theme'

function Root () {
  return (
    <ToggleThemeProvider>
      <GlobalStyle />
      <Layout />
    </ToggleThemeProvider>
  )
};

export { Root }
