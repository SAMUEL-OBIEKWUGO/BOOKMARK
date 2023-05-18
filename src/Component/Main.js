import React from 'react'
import '../styles/main.css'

const Main = () => {
  return (
    <div>
        <div className="blue-back">
        <div className='containeer'>
         <div  className='form'>
         <p>35,000 + ALREADY JOINED</p>
          <h2>Stay up-to-date with what we're doing</h2>
        </div>
        <input type="email" name="email" id="email" placeholder='Enter your email address' />
        <button className='contact'>Contact Us</button>
         </div>
        </div>
    </div>
  )
}

export default Main