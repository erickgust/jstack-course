import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Posts } from './pages/posts/posts'

function Routes() {
  return (
    <>
      <Route path='/' component={Home} exact />
      <Route path='/posts' component={Posts} />
    </>

  )
}

export { Routes }
