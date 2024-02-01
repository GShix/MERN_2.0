import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const myStyle2 = {
  color:"white"
}
function App() {
  const myStyle = {
    color:"red"
  }

  return (
    <>
      <h1 style={myStyle}>Dambar Sing Gharti</h1>
      <h2 style={myStyle2}>Future Web Developer</h2>
    </>
  )
}

export default App
