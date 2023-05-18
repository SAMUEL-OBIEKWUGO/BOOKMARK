import React from 'react'
import '../styles/hero.css'
import top_img from '../asset/illustration-hero (1).svg'

function Hero() {
  return (
    <div>
         <div className="container">
         <div className='hero'>
        <div className='back'>
        <div className='img'>
          <img src={top_img} alt="" />
        </div>
        </div>
          <div className='manager'>
          <div className='bookmark'> 
            <h2 className='mt-5 simple'>A Simple Bookmark Manager</h2>
            <p>A clean and simple interface to organise  your favourite website. Open a new browser tab and see your site load <br/> instantly. Try it for free. </p>
          </div>
          <div className='btns justify-content-sm-between d-flex'>
          <button className='btn-1 bg-primary text-light '>Get in on chrome</button>
          <button className='btn-2'>Get it on Firefox</button>
          </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Hero