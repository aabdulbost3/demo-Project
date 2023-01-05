import React from 'react'
import "./HeaderMySkillsContentCenterLeft.css"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

function HeaderMySkillsContentCenterLeft() {
const { t, i18n } = useTranslation();

  return (
    <div className='HeaderMySkillsContentCenterLeft'>
      <div className="HeaderMySkillsContentCenterLeftText">
        <p>{t("Header.4")}</p>
      </div>
      <div className="HeaderMyskillsBtn">
        <NavLink to={'/contact'}>
            <button className='white-btn'>{t("Header.6")}</button>
        </NavLink>
      </div>
    </div>
  )
}

export default HeaderMySkillsContentCenterLeft
