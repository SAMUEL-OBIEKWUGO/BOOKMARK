import React from 'react'
import tab1 from '../asset/illustration-features-tab-1.svg'
import '../styles/click.css'

const Click = () => {
  return (
    <div>
        <div className="container">
         <div className='riot'>
         <div className='click'>
          <div className="tabBack">
          <div className="img-click">
           <img src={tab1} alt="" />
           </div>
          </div>
         <div className='organise'>
         <div>
            <h3 className='bookmark mt-5'>Bookmark in one click</h3>
          <p> Organize your bookmarks however you like.<br/> Our simple drag-and-drag interface gives <br/> you complete control over how you manger <br/> your favourite sites.</p>
          </div>
          <div className="btns">
          <button className='btn-1 bg-primary text-light book-btn'>Get in on chrome</button>
          </div>
         </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Click