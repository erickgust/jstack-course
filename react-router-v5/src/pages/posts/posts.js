import React from 'react'

import { Container } from './posts-styles'
import { Post } from './post'

import posts from './data'

function Posts() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  )
}

export { Posts }
