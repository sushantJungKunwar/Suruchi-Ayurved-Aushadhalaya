import React from 'react'
import '../About/About.css'
import About_img from '../../assests/About-img.jpg'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={About_img} alt="" className='about-img' />
        </div>
        
        <div className="about-right">
          <h2>ABOUT US</h2>
          <p>The diverse health practices, knowledge, and beliefs—incorporating plant, animal, and mineral-based medicines, spiritual therapies, manual techniques, and exercises—applied singularly or in combination to maintain well-being and treat illness. Developed over centuries within various indigenous cultures, these systems often prioritize a holistic balance between the individual and their environment rather than focusing solely on physical symptoms. 
          <br></br><br></br>
          While modern healthcare relies on biomedicine, a significant portion of the global population continues to use traditional methods like Ayurveda, Traditional Chinese Medicine, or herbalism as their primary source of care. Today, international health organizations work to integrate these practices into mainstream systems by establishing safety standards and researching the pharmacological potential of ancient remedies.</p>
        </div>
      
    </div>
  )
}

export default About
