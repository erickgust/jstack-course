import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useTransition, animated } from '@react-spring/web'
import { Home } from './pages/home'
import { Posts } from './pages/posts'
import { NotFound } from './pages/not-found'
import { Post } from './pages/post'

function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute', },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', },
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path='/' component={Home} exact />
        <Route path='/posts' component={Posts} exact />
        <Route path='/post/:id' component={Post} />
        <Route path='*' component={NotFound} />
      </Switch>
    </animated.div>
  ))
}

export { Routes }
