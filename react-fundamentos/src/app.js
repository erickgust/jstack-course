import React from 'react'
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
      <h1>JStack's Blog</h1>
      <h1>Posts da semana</h1>

      <hr />

      {posts.map((post, index) =>(
        <Post {...post} key={index} />
      ))}
    </>
  )
}