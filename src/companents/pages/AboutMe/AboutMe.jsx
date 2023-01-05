import React from 'react'
import "./AboutMe.css"
import HeaderAboutME from '../Home/Header/HeaderAboutME/HeaderAboutME'
import HeaderMySkills from '../Home/Header/HeaderMySkills/HeaderMySkills'
function AboutMe() {
  return (
    <div className='AboutMePage container'>
      <HeaderAboutME/>
      <HeaderMySkills/>
    </div>
  )
}

export default AboutMe
