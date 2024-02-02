import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import Footer from '../../Components/Navbar/Footer'
import Button from '../../Components/Button/Button'
const About = () => {
  return (
    <div>
      
      <Navbar/>
  <main>
    <section className="about">
      <h1>About Us</h1>
      <p>We are a team of passionate individuals dedicated to providing high-quality products and exceptional customer service. We believe in offering a wide variety of items at affordable prices, so you can find exactly what you're looking for.</p>
      <p>Our mission is to make shopping easy and enjoyable, and we strive to create a positive experience for every customer. We value your feedback and are always looking for ways to improve our store.</p>

      <Button title= "Register"/>
      <h2>Meet Our Team</h2>
      </section>
  </main>
  <Footer/>
    </div>
  )
}

export default About