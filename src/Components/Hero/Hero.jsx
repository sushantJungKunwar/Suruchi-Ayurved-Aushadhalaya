import React from 'react'
import '../Hero/Hero.css'
import side_arrow from '../../assests/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Be with a nature<br></br>
          Live a long life
        </h1>
        <p>Complete switch to chemical free product
          to nourish your inner soul
          </p>
      <button className='btn'>Explore more <img src={side_arrow} alt="" /></button>

        
      </div>
      
    </div>
  )
}

export default Hero
