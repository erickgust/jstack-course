import React from 'react'
import { createGlobalStyle } from "styled-components";
import { App } from "./components/app";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222;
    color: #EEE;
  }
`

export function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}