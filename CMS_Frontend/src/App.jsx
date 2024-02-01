// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
