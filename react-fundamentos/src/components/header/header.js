import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../button'
import { ThemeContext } from '../../contexts/theme'

import styles from './header.scss'

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
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