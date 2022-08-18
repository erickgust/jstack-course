import React from 'react'
import PropTypes from 'prop-types'

export function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

Header.defaultProps = {
  title: 'JStack\'s blog'
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}