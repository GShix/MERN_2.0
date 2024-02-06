// import React from 'react'
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Navbar/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import dambar from '../../Components/Navbar/dambar.jpg'
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

      <main>
        <div className="container">
          <section className="featured">
            {blogs.map((blog) => {
              return (
                <article key={blog._id}>
                  <h2>Featured Post Title</h2>
                  <h3>{blog.subTitle}</h3>
                  <p>
                    {blog.description}
                  </p>
                  <a href="#">Read More</a>
                </article>
              );
            })}
          </section>

          <section className="blog-posts">
            <article>
              <h2>Blog Post Title 1</h2>
              <p>
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta.
              </p>
              <a href="#">Read More</a>
            </article>
            <article>
              <h2>Blog Post Title 2</h2>
              <p>
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Praesent mauris. Fusce nec tellus sed augue semper porta.
              </p>
              <a href="#">Read More</a>
            </article>
          </section>
        </div>
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
