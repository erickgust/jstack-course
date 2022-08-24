import PropTypes from 'prop-types'
import React from 'react'
import { PostHeader } from './post-header'

export function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <PostHeader
          onRemove={onRemove}
          post={{
            id: post.id,
            title: post.title,
            read: post.read
          }}
        />

        <br />

        <small>{post.subtitle}</small>
        <br />
        Media: {post.likes / 2}
      </article>
      <br />
    </>
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