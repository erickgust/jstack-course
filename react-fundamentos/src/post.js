import PropTypes from 'prop-types'
import React from 'react'

export function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <strong>
          {post.read ? <s>{post.title}</s> : post.title}
        </strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
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