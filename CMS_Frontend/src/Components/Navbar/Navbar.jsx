import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <header>
    <nav>
      <a href="#" className="logo">My Ecommerce Store</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Navbar