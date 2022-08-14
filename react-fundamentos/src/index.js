import React from 'react'
import { createRoot } from 'react-dom'
import { App } from './app'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Element not found')
}

const root = createRoot(rootElement)

root.render(
  <App />
)