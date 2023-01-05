import React from 'react'
import "./HeaderRight.css"
import HeaderAboutRightIcon from './HeaderAboutRightIcon/HeaderAboutRightIcon';
import HeaderAboutRightText from './HeaderAboutRightText/HeaderAboutRightText';



function HeaderRight() {
  return (
    <div className='HeaderRightAbout'>
      <HeaderAboutRightText/>
      <HeaderAboutRightIcon />
      </div>

  )
}

export default HeaderRight
