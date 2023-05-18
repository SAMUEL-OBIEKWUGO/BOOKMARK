import React from 'react'
import '../styles/navbar.css'
import bookmark from '../asset/logo-bookmark.svg';
import handbuger from '../asset/icon-hamburger.svg'

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <div className="container">
            <div className="navbar mt-4">
              <div className='bookmark'>
                <img src={bookmark} alt=""/>
              </div>
              <div className='handbuger'>
                <img src={handbuger} alt="" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar