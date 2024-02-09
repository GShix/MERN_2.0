import React, { useState } from 'react'
import './Wwithme.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Wwithme = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    subTitle: '',
    description: ''
  })
  
  const createBlog =async(e)=>{
    e.preventDefault();
    const response =await axios.post("http://localhost:3000/blogs",data)
    console.log(response)
    if(response.status ==201){

      alert(response.data.message)
      navigate('/')
    }
    else{
      alert("Sth went wrong")
    }
  }
    const handleChange =(e)=>{
      const {name, value} = e.target;
      setData({
        ...data,
      [name]:value
      })
      // console.log(name,value)
    }

  return (
    <div>
  <h1>Title</h1>
  <h2>Subtitle</h2>
  <p>Description: This is a simple HTML form with a title, subtitle, and description.</p>
  <form onSubmit={createBlog}>
    <label htmlFor="Title">Title:</label><br/>
    <input type="text" id="title" name='title' placeholder='Enter a Title' onChange={handleChange}/><br/> 
    <label htmlFor="SubTitle">Sub Title:</label><br/>
    <input type="text" id="subtitle" name='subTitle' placeholder='Enter a Sub Title' onChange={handleChange}/><br/>
    <label htmlFor="Description">Description:</label><br/>
    <textarea id="description" name='description' placeholder='Enter a Description' onChange={handleChange}></textarea><br/>
    <input type="submit" value="Submit"/>
  </form>

    </div>
  )
}

export default Wwithme