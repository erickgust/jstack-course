import React from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './root'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Element not found')
}

const root = createRoot(rootElement)

root.render(
  <Root />
)
