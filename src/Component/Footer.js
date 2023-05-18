import React from 'react'
import '../styles/footer.css'
import bookmark from '../asset/logo-bookmark.svg'
import facebook from '../asset/icon-facebook.svg'
import twitter from '../asset/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
       <div className="container">
        <div className="footer">
          <img src={bookmark} alt="" />
          <h4>FEATURES</h4>
          <h4>PRICING</h4>
          <h4>CONTACT</h4> 
          <div className='social'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer