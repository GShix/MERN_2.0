import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
import './MiniNavbar.css'
import { useNavigate } from 'react-router-dom'

const MiniNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="minNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" onClick={()=>navigate('/')}/>
                </svg>
            <ul>
                <li><a href="/">HTML</a></li>
                <li><a href="/categories">CSS</a></li>
                <li><a href="/categories">JS</a></li>
                <li><a href="/categories">C++</a></li>
                <li><a href="contact">MERN</a></li>
            </ul>
            <input type='text' placeholder='Search..'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='blue' fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </div>
    </div>
  )
}

export default MiniNavbar