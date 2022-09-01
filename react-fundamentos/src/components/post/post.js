import PropTypes from 'prop-types'
import React from 'react'
import { PostHeader } from './post-header'
import { Rate, Subtitle } from './post-styles'

import styles from './post.scss'

export function Post({ post, onRemove }) {
  return (
    <article className={
      post.removed
        ? styles.postRemoved
        : styles.post
    }>
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
    </article>
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