import React from 'react'

import { Container } from './list-styles'
import { Post } from './post'

import posts from './posts'

function PostsList () {
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

export { PostsList }
