import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import Button from '../Button/Button'
const Navbar = () => {
  return (
    <div>
    <div className="container">
      <img id='logo' src={logo} alt='Code with Dambar'/>
      {/* <h1 >Code with Dambar</h1>  */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/categories">Blog</a></li>
          <li><a href="/categories">Notes</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="about">Work With Me</a></li>
          <Button  title="Login" />
          <Button id='regBtn' title="Register" />

        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar