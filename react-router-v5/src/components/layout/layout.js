import React from 'react'

import { Header } from '../header'
import { Footer } from '../footer'
import { Routes } from '../../routes'
import { BrowserRouter, Link } from 'react-router-dom'
import { Nav } from './layout-styles'

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/post/23'>Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export { Layout }
