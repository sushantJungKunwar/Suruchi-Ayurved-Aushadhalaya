import React, { useRef } from 'react'
import './Testimonials.css'
import Next_icon from '../../assests/Next-buttom.png'
import Back_icon from '../../assests/Back-buttom.png'
import User_1 from '../../assests/User-1.jpg'
import User_2 from '../../assests/User-2.jpg'
import User_3 from '../../assests/User-3.jpg'
import User_4 from '../../assests/User-4.jpg'

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;
  const slideforward = ()=>{
if (tx > -50){
  tx -=25;
}
slider.current.style.transform = `translateX(${tx}%)`
  }

    const slidebackward = ()=>{
    if (tx < 0){
  tx +=25;
}
slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className='testimonials'>
      <img src={Next_icon} alt="" className='next-btn' onClick={slideforward}/>
      <img src={Back_icon} alt="" className='back-btn' onClick={slidebackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_1} alt="" />
                <div>
                  <h3>Biklop Chhetri</h3>
                  <span>Butwal</span>
                </div>
              </div>
              <p>A very good Ayurveda pharmacy with genuine herbal medicines. The staff are helpful and guide customers properly. Highly recommended for natural and Ayurvedic treatments.</p>
            </div>
          </li>

                    <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_2} alt="" />
                <div>
                  <h3>Suruchi Kunwar</h3>
                  <span>Chitwan</span>
                </div>
              </div>
              <p>I had a great experience at this Ayurveda pharmacy. They provide authentic herbal medicines and the staff explain the benefits and usage very clearly. this is a great place to visit.</p>
            </div>
          </li>

                    <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_3} alt="" />
                <div>
                  <h3>Pranish Xettri</h3>
                  <span>Bardagaht-9, Nawalparasi</span>
                </div>
              </div>
              <p>One of the best places to buy Ayurvedic medicines. The pharmacy is clean, well-managed, and the staff are very polite. I appreciate their focus on natural and traditional health care.</p>
            </div>
          </li>

        <li>
            <div className="slide">
              <div className="user-info">
                <img src={User_4} alt="" />
                <div>
                  <h3>Asmita Khadka</h3>
                  <span>Palpa</span>
                </div>
              </div>
              <p>Trusted Ayurveda pharmacy with quality herbal products and excellent customer service. Perfect place for natural health care solutions. Visit once for the problem solution.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
