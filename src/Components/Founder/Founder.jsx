import React from 'react'
import './Founder.css'
import Founder_img from '../../assests/Founder-img.jpg'

const Founder = () => {
  return (
    <div className='founder'>
        <div className="founder-left">
            <img src={Founder_img} alt="" className='founder-img' />
             </div>
      <div className="founder-text">
        <div>
        <h2>Binod Kunwar Chhetri</h2>
      <h4>Bardaghat-4, Nawalparasi</h4>
      </div>
      <p>I started this Ayurveda Pharmacy with a mission to bring the power of natural and traditional medicine to our community. We believe that Ayurveda offers a balanced and holistic approach to health. Our pharmacy focuses on providing genuine herbal medicines, quality products, and honest guidance so that people can choose natural ways to care for their health</p>
      <p>Along with providing quality Ayurvedic medicines, our pharmacy is dedicated to building trust and awareness about natural healthcare. We carefully select herbal products and formulations that follow traditional Ayurvedic principles while maintaining modern quality standards. Our aim is not only to sell medicines but also to guide people toward a healthier and more balanced lifestyle through the power of nature.</p>
      </div>

    </div>
  )
}

export default Founder
