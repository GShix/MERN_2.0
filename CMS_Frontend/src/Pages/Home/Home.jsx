// import React from 'react'
import Button from '../../Components/Button/Button'
import Footer from '../../Components/Navbar/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
const Home = () => {
  return (
    <div>
    <Navbar/>
    
  <main>
    <section className="hero">
      <h1>Discover amazing products</h1>
      <p>Explore our wide range of quality items at great prices.</p>
      <button className="cta">Shop Now</button>
    </section>

    <section className="featured-products">
      
    <Button title="Refresh" subTitle="Click Here"/>
      <h2>Featured Products</h2>
      <div className="product-grid">
        <div className="product">
          <img src="images/product1.jpg" alt="Product 1" />
          <h3>Product Name 1</h3>
          <p>$49.99</p>
        </div>
        </div>
    </section>
    <section className="promotion">
      <h2>Free Shipping on Orders Over $50</h2>
      <p>Limited time offer. Shop now and save!</p>
    </section>
  </main>

  <Footer/>
    </div>
  )
}

export default Home