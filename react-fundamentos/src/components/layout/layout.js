import React from 'react'

import { Header } from '../header'
import { PostsList } from '../posts-list'
import { Footer } from '../footer'

function Layout () {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  )
}

export { Layout }
