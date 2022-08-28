import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.scss'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Element not found')
}

const root = createRoot(rootElement)

root.render(
  <App />
)