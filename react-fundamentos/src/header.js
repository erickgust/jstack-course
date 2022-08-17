import React from 'react'

export function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}