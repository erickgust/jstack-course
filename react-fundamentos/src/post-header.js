import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './button'

export function PostHeader({ post, onRemove }) {
  return (
    <>
      <strong>
        {post.read ? <s>{post.title}</s> : post.title}
      </strong>

      <Button onClick={() => onRemove(post.id)}>Remover</Button>
    </>
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  })
}