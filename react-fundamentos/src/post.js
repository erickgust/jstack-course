import PropTypes from 'prop-types'
import React from 'react'

export function Post({ post, likes, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Media: {likes / 2}
      </article>
      <br />
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })
}