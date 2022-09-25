import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Posts } from './pages/posts/posts'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/posts' component={Posts} />
    </BrowserRouter>

  )
}

export { Routes }
