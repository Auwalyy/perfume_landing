import React from 'react'
import hero from '../assets/hero.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="container">
      <div className="img_container">
        <img src={hero} alt="" />
      </div>
      <div className="container_header">
        <h1>Beauty make sure your confidence</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Harum ipsam numquam alias, reprehenderit eius sapiente velit maiores saepe nisi, 
            Harum ipsam numquam alias, reprehenderit eius sapiente velit maiores saepe nisi,
            molestias suscipit beatae vero delectus ullam minus cum fugit corrupti officia?</p>
         <div className="btn"></div>
         <button className="btn_hero">shop now</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
