import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/home'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>

  )
}

export { Routes }
