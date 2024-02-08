import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import Button from '../Button/Button'
import { useNavigate} from 'react-router-dom'
const Navbar = () => {
  const Navigate = useNavigate()
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
          <li><a onClick={()=>Navigate('/workWithMe')}>Work With Me</a></li>
          <Button  title="Login" />
          <Button id='regBtn' title="Register" />

        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar