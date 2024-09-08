import React from 'react'
import sec from '../assets/sec.jpg'
import sec2 from '../assets/sec2.jpg'
import { FaArrowRight } from 'react-icons/fa'
import './Section.css'

const Section = () => {
  return (
    <section>
       <div className='containers'>
        <div className="header_img">
            <div className="img_1">
              <img src={sec} alt="" />
               <button className='img_desc'>explore shop </button>
            </div>
            <div className="img_2">
              <img src={sec2} alt="" />
               <button className='img_desc'>explore shop </button>
            </div>
        </div>
        <div className="sec_text">
            <h2 className="sec_title">We have Quality Products for Better ELements</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Harum ipsam numquam alias, reprehenderit eius sapiente velit maiores saepe nisi, 
            Harum ipsam numquam alias, reprehenderit eius sapiente velit maiores saepe nisi,
            molestias suscipit beatae vero delectus ullam minus cum fugit corrupti officia?</p>
            <button className='sec_btn'>shop now</button>
        </div>
    </div>
    </section>
  )
}

export default Section