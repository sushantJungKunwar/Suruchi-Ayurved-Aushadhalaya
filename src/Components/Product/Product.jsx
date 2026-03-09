import React from 'react'
import '../Product/Product.css'
import Product_1 from '../../assests/Product-1.jpg'
import Product_2 from '../../assests/Product-2.jpg'
import Product_3 from '../../assests/Product-3.jpg'

const Product = () => {
  return (
    <div className='product'>
        <div className="products">
            <img src={Product_1} alt="" />
            <div className="caption">
                <p>Ashwagandha</p>
            </div>

        </div>
            <div className="products">
            <img src={Product_2} alt="" />
                        <div className="caption">
                <p>Yasthimadhu</p>
            </div>

        </div>
            <div className="products">
            <img src={Product_3} alt="" />
                        <div className="caption">
                <p>Seabuck Thorn</p>
            </div>

        </div>
    
    
    </div>
    
  )
}

export default Product
