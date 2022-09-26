import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { Posts } from './pages/posts/posts'
import { NotFound } from './pages/not-found'
import { Post } from './pages/post'

function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/posts' component={Posts} exact />
      <Route path='/post/:id' component={Post} />
      <Route path='*' component={NotFound} />
    </Switch>

  )
}

export { Routes }
