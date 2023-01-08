import React from 'react'
import "./HeaderAboutRightText.css"
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";


function HeaderAboutRightText() {
const { t, i18n } = useTranslation();
  return (
    <div>
      <div className='HeaderAboutRightText'>
      <h2>{t("Header.3")}</h2>
      <p>{t("Header.4")}</p><br />
      <div className="HeaderRightBtn">
      <NavLink to={"/contact"}>
        <b className="white-btn qza">{t("Navbar.2")}</b>
      </NavLink>
      </div>
    </div>
    </div>
  )
}

export default HeaderAboutRightText
