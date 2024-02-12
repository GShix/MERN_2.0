import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {
    // const id = useParams();
    const {id} = useParams(); //Dynamic Route ko id lina laai
    const [blog,setBlog] = useState({});
    const navigate = useNavigate();
    // Delete API
    const deleteBlog=async()=>{
        const response= await axios.delete("http://localhost:3000/blogs/" +id);
        // console.log(response);
        // if(response.status ==200){
        //     alert("Your Blog is deleted successfully")
        //     naviate('/')
        // }
    }
    const fetchSingleBlog = async()=>{
       const response= await axios.get('http://localhost:3000/blogs/' +id);
    //    console.log(response)
        if(response.status==200){
            setBlog(response.data.blogs)
        }
    }
    useEffect(()=>{
        fetchSingleBlog()
    },[])
    // console.log(blog,'Blogs')
  return (
    <div>
        <button onClick={()=>navigate('/')}>Home</button>
        <hr/>
        <h1>{blog.title}</h1>
        <h2>{blog.subTitle}</h2>
        <p>{blog.description}</p>
        <button onClick={deleteBlog}>Delete</button>
        <button onClick={()=>navigate(`/update/${blog._id}`)}>Update</button>
        {/* <Link to={`/update/${blog._id}`}>Update</Link> */}
    
        {/* <button onClick={()=>deleteBlog(blog._id)}>Delete</button> */}
    </div>
  )
}

export default SingleBlog