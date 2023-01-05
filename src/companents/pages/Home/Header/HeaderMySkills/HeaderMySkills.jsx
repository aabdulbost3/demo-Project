import React from 'react'
import "./HeaderMySkills.css"
import MySkillsNavbar from "./MySkillsNavbar/MySkillsNavbar"
import HeaderMySkillsContentCenterLeft from './HeaderMySkillsContentCenter/HeaderMySkillsContentCenterLeft/HeaderMySkillsContentCenterLeft'
import HeaderMySkillsContentCenterRight from './HeaderMySkillsContentCenter/HeaderMySkillsContentCenterRight/HeaderMySkillsContentCenterRight'
function HeaderMySkills() {
  return (
    <div className='HeaderMySkills'>
      <MySkillsNavbar/>
      <div className="qq">
        <HeaderMySkillsContentCenterLeft />
      <HeaderMySkillsContentCenterRight/>
      </div>
    </div>
  )
}

export default HeaderMySkills
