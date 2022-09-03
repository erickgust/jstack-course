import React from 'react'

import { Header } from '../header'
import { PostsList } from '../posts-list'
import { Footer } from '../footer'

function Layout ({ onToggleTheme, theme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
      <PostsList />
      <Footer />
    </>
  )
}

export { Layout }
