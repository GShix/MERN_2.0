import { useEffect, useState } from "react";
import "./UpdateBlog.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdateBlog = () => {
  const {id}= useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  //handle change in input
  const handleChange = (e)=>{
    const {name,value} = e.target
    setBlog({
      ...blog,
      [name]:value
    })
  }
  const fetchSingleBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    //    console.log(response)
    if (response.status == 200) {
      setBlog(response.data.blogs);
    }
  };
  useEffect(() => {
    fetchSingleBlog();
  }, []);
  console.log(blog)


  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <p>Description: This is a simple HTML form with a title, subtitle, and description.</p>
      <form>
        <label htmlFor="Title">Title:</label><br />
        <input type="text" id="title" value={blog.title} name="title" onChange={handleChange} placeholder="Enter a Title"/><br />
        <label htmlFor="SubTitle">Sub Title:</label><br />
        <input type="text" id="subtitle" value={blog.subTitle} name="subTitle" onChange={handleChange} placeholder="Enter a Sub Title"/><br />
        <label htmlFor="Description">Description:</label><br />
        <textarea id="description" value={blog.description} name="description" onChange={handleChange}  placeholder="Enter a Description"></textarea><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateBlog;
