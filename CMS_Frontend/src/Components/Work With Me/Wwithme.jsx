import React, { useState } from 'react'
import './Wwithme.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Wwithme = () => {
  const navigate = useNavigate()
  const[title,setTitle] =useState('');
  const[subTitle,setSubTitle] =useState('');
  const[description,setDescription] =useState('');
  // console.log(title,subTitle,description) 
  
  const createBlog =async(e)=>{
    e.preventDefault();
    const data ={
      title: title,
      subTitle: subTitle,
      description: description
    }
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

  return (
    <div>
  <h1>Title</h1>
  <h2>Subtitle</h2>
  <p>Description: This is a simple HTML form with a title, subtitle, and description.</p>
  <form onSubmit={createBlog}>
    <label htmlFor="Title">Title:</label><br/>
    <input type="text" id="title" placeholder='Enter a Title' onChange={(e)=>setTitle(e.target.value)}/><br/> 
    <label htmlFor="SubTitle">Sub Title:</label><br/>
    <input type="text" id="subtitle" placeholder='Enter a Sub Title' onChange={(e)=>setSubTitle(e.target.value)}/><br/>
    <label htmlFor="Description">Description:</label><br/>
    <textarea id="description" placeholder='Enter a Description' onChange={(e)=>setDescription(e.target.value)}></textarea><br/>
    <input type="submit" value="Submit"/>
  </form>

    </div>
  )
}

export default Wwithme