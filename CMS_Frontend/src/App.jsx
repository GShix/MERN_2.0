// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Test from './Pages/Test/Test'
import UseEffect from './Pages/UseEffect/UseEffect'
import SingleBlog from './Pages/SingleBlog/SingleBlog'
import Wwithme from './Components/Work With Me/Wwithme'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Test/>} />
      <Route path='/useEffect' element={<UseEffect/>} />
      <Route path='/workWithMe' element={<Wwithme/>} />
      <Route path='/singleBlog/:id' element={<SingleBlog/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
