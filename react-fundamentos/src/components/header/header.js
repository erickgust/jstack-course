import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../button'
import { ThemeContext } from '../../contexts/theme'


const Title = styled.h1`
  color: #6495ed;
`

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Theme</Button>
      {children}
    </div>
  )
}

Header.defaultProps = {
  title: 'JStack\'s blog'
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}