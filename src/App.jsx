import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Product from './Components/Product/Product'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Founder from './Components/Founder/Founder'
import Gallery from './Components/Gallery/Gallery'
import Testimonial from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'




const App = () => {
 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle='PRODUCT PLANT' title= 'What We Offer'/>
        <Product/>
        <About/>
        <Title subtitle='FOUNDER' />
        <Founder/>
        <Title subtitle='GALLERY' title= 'Medicine Varities'/>
        <Gallery/>
        <Title subtitle='TESTIMONIAL' title= 'What People Says'/>
        <Testimonial/>
        <Title subtitle='CONTACT US' title= 'Get in Touch'/>
        <Contact/>
        <Footer/>
        </div>
      
    </div>
  )
}

export default App
