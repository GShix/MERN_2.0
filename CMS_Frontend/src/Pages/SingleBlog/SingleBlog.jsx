import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    // const id = useParams();
    const {id} = useParams(); //Dynamic Route ko id lina laai
    const [blog,setBlog] = useState({});
    const fetchSingleBlog = async()=>{
       const response= await axios.get('http://localhost:3000/blogs/'+id);
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
        <h1>{blog.title}</h1>
        <h2>{blog.subTitle}</h2>
        <p>{blog.description}</p>
    </div>
  )
}

export default SingleBlog