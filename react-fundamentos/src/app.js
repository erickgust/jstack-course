import React from 'react'
import { Header } from './header'
import { Post } from './post'

const posts = [
  {
    title: 'Título da notícia 1',
    subtitle: 'Subtítulo da notícia 1',
    likes: 20,
    id: 1,
  },
  {
    title: 'Título da notícia 2',
    subtitle: 'Subtítulo da notícia 2',
    likes: 60,
    id: 2,
  },
  {
    title: 'Título da notícia 3',
    subtitle: 'Subtítulo da notícia 3',
    likes: 40,
    id: 3,
  },
]

export function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post =>(
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  )
}