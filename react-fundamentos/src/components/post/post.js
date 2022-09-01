import PropTypes from 'prop-types'
import React from 'react'
import { PostHeader } from './post-header'
import { Container, Rate, Subtitle } from './post-styles'

export function Post({ post, onRemove }) {
  return (
    <Container removed={post.removed}>
      <PostHeader
        onRemove={onRemove}
        post={{
          id: post.id,
          title: post.title,
          read: post.read
        }}
      />

      <Subtitle>{post.subtitle}</Subtitle>
      <Rate>Media: {post.likes / 2}</Rate>
    </Container>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  })
}