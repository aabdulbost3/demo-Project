import React from 'react'
import "./HeaderAboutME.css"
import HeaderAboutMENavbar from './HeaderAboutMENavbar/HeaderAboutMENavbar'
import HeaderImgLeft from './HeaderLeft/HeaderImgLeft'
import HeaderRight from './HeaderRight/HeaderRight'

function HeaderAboutME() {
  return (
    <div className='HeaderAboutME'>
      <HeaderAboutMENavbar/>
      <div className="Headerdf">
        <HeaderImgLeft />
        <HeaderRight />
        </div>
    </div>
  )
}

export default HeaderAboutME
