import React from 'react'
import '../styles/extension.css'
import chrome from '../asset/logo-chrome.svg'
import firefox from '../asset/logo-firefox.svg'
import opera from '../asset/logo-opera.svg'
import dots from '../asset/bg-dots.svg'

const Extension = () => {
  return (
    <div>
        <div className="container">
           <h1>Download the extension</h1>
            <p>We've got more browsers in the pipeline.<br/>Please do let us know if you've got a <br/> favourite you'd like us to prioritize. </p>

          <div className='browser'>
            <div className='box'>
                <img src={chrome} alt="" className='chrome' />
                <h2>Add to Chrome</h2>
                <p>Minimum version 62</p>
                <img src={dots} className='dots' alt="" />
                <button className='ex-btn'>Add & Install Extension</button>
            </div>

            <div className='box'>
                <img src={firefox} alt="" className='chrome' />
                <h2>Add to Firefox</h2>
                <p>Minimum version 55</p>
                <img src={dots} className='dots' alt="" />
                <button className='ex-btn'>Add & Install Extension</button>
            </div>

            <div className='box'>
                <img src={opera} alt="" className='chrome' />
                <h2>Add to Opera</h2>
                <p>Minimum version 46</p>
                <img src={dots} className='dots' alt="" />
                <button className='ex-btn'>Add & Install Extension</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Extension