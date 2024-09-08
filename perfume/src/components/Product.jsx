import React from 'react'
import sec from '../assets/sec.jpg'
import sec2 from '../assets/sec2.jpg'
import './Product.css'

const Product = () => {
  return (
     <section>
        <div className='containers'>
        <div className="pro_header">
            <h2 className="pro_title">Popular Products</h2>
        </div>
        <div className="pro_header">
                    <div className="pro_header_img">
            <div className="pro_img_1">
              <img src={sec} alt="" />
              <h1 className="pro_img_title">Tota Harper</h1>
              <p className='img_desc'>Explore shop <span>$140.00</span></p>
            </div>
            <div className="pro_img_1">
              <img src={sec2} alt="" />
              <h1 className="pro_img_title">Tota Harper</h1>
              <p className='pro_img_desc'>Explore shop <span>$140.00</span></p>
            </div>
            <div className="pro_img_1">
              <img src={sec} alt="" />
              <h1 className="pro_img_title">Tota Harper</h1>
              <p className='pro_img_desc'>Explore shop <span>$140.00</span></p>
            </div>
            <div className="pro_img_1">
              <img src={sec2} alt="" />
              <h1 className="pro_img_title">Tota Harper</h1>
              <p className='pro_img_desc'>Explore shop <span>$140.00</span></p>
            </div>
        </div>
        </div>
    </div>
     </section>
  )
}

export default Product