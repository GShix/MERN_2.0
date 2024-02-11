import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div>
        <h1>Single Blog</h1>
    </div>
  )
}

export default SingleBlog