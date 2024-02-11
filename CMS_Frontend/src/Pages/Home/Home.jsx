// import React from 'react'
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import dambar from '../../Components/Navbar/dambar.jpg'
import homeImg from './home.jpg'
import MiniNavbar from "../../Components/MiniNavbar/MiniNavbar";
import { Link } from "react-router-dom";
const Home = () => {
  const [blogs, setBlog] = useState([]);
  //api call
  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    setBlog(response.data.blogs);
    // console.log(response.data.blogs)
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  // console.log(blogs, "allBlogs");
  return (
    <div>
      <Navbar />
      <MiniNavbar/>
      <main>
        <img style={{width:'100vw', height:'100vh'}} src={homeImg }/>
          <section className="featured">
            {blogs.map((blog) => {
              return (
                <article key={blog._id}>
                  <h2>{blog.title}</h2>
                  <h3>{blog.subTitle}</h3>
                  <p>
                    {blog.description}
                  </p>
                  {/* <Link to={'/singleBlog/'+blog._id}>Read More</Link> */}
                  <Link to={`/singleBlog/${blog._id}`}>Read More</Link>
                </article>
              );
            })}
          </section>
      </main>

      <footer>
        <div className="footer">
          <img src={dambar}/>
          <p>Copyright &copy; Ask with Dambar</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
