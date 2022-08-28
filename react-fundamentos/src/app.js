import React, { useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import { Header } from './header'
import { Post } from './post'

import styles from './app.scss'

export function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Título da notícia 1',
      subtitle: 'Subtítulo da notícia 1',
      likes: 20,
      read: false,
      id: Math.random(),
    },
    {
      title: 'Título da notícia 2',
      subtitle: 'Subtítulo da notícia 2',
      likes: 60,
      read: false,
      id: Math.random(),
    },
    {
      title: 'Título da notícia 3',
      subtitle: 'Subtítulo da notícia 3',
      likes: 40,
      read: true,
      id: Math.random(),
    },
  ])

  function handleRemovePost(postId) {
    setPosts((posts) => posts.filter(post => post.id !== postId))
  }

  function handleRefresh() {
    setPosts((state) => ([
      ...state,
      {
        title: `Título da notícia ${state.length + 1}`,
        subtitle: `Subtítulo da notícia ${state.length + 1}`,
        likes: 40,
        id: Math.random(),
        read: false,
      },
    ]))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>  
        </h2>
      </Header>

      <hr />

      {posts.map(post =>(
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
}