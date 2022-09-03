import { useContext } from 'react'
import { ToggleThemeContext } from '../contexts/theme'

export function useToggleTheme () {
  const context = useContext(ToggleThemeContext)

  return context
}
