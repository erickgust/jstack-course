import React from 'react'

import { GlobalStyle } from './styles/global'
import { Layout } from './components/layout'
import { ThemeProvider } from 'styled-components'

import { light } from './styles/themes'

function Root () {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
};

export { Root }
