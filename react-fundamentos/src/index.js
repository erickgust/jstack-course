import React from 'react'
import {createRoot} from 'react-dom'

const app = document.querySelector('[data-js="app"]')

if (!app) {
  throw new Error('Element not found')
}

const root = createRoot(app)

root.render(
  <h1>App</h1>
)