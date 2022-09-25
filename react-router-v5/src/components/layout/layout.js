import React from 'react'

import { Header } from '../header'
import { Footer } from '../footer'
import { Routes } from '../../routes'

function Layout() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export { Layout }
