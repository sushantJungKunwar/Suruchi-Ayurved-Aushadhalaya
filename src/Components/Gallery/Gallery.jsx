import React from 'react'
import '../Gallery/Gallery.css'
import Gallery_1 from '../../assests/Gallery-1.png'
import Gallery_2 from '../../assests/Gallery-2.png'
import Gallery_3 from '../../assests/Gallery-3.png'
import Gallery_4 from '../../assests/Gallery-4.png'
import Gallery_5 from '../../assests/Gallery-5.png'
import Gallery_6 from '../../assests/Gallery-6.png'
import Gallery_7 from '../../assests/Gallery-7.png'
import Gallery_8 from '../../assests/Gallery-8.png'
import Right_arrow from '../../assests/Right-arrow.png'
const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="galleries">
      <img src={Gallery_1} alt="" />
      <img src={Gallery_2} alt="" />
      <img src={Gallery_3} alt="" />
      <img src={Gallery_4} alt="" />
      <img src={Gallery_5} alt="" />
      <img src={Gallery_6} alt="" />
      <img src={Gallery_7} alt="" />
      <img src={Gallery_8} alt="" />
      </div>
<button className='btn dark-btn'>See more here <img src={Right_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery
