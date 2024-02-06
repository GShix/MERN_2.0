import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Navbar/Footer'
import Button from '../../Components/Button/Button'
const Contact = () => {
  return (
    <div>
        <Navbar/>
  <main>
    <section className="contact">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        
    <Button title="Call Us"/>
      <form action="contact.php" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: +123-456-7890</p>
        <p>Email: support@myecommercestore.com</p>
        <p>Address: 123 Main Street, Anytown, CA 12345</p>
      </section>
    </section>
  </main>
  <Footer/>
    </div>
  )
}

export default Contact