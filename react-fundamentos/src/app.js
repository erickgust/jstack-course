import React from 'react'
import { Header } from './header'
import { Post } from './post'

const posts = [
  {
    title: 'Título da notícia 1',
    subtitle: 'Subtítulo da notícia 1',
  },
  {
    title: 'Título da notícia 2',
    subtitle: 'Subtítulo da notícia 2',
  },
  {
    title: 'Título da notícia 3',
    subtitle: 'Subtítulo da notícia 3',
  },
]

export function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post, index) =>(
        <Post {...post} key={index} />
      ))}
    </>
  )
}