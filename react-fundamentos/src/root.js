import React from 'react'

import { GlobalStyle } from './styles/global'
import { Layout } from './components/layout'

function Root () {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  )
};

export { Root }
