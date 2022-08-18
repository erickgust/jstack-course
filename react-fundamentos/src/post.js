import PropTypes from 'prop-types'
import React from 'react'

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.title}</strong>
        <br />
        <small>{props.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  })
}