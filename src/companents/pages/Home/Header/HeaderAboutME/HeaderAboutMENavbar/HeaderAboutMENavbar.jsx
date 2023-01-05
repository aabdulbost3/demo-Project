import React from 'react'
import "./HeaderAboutMENavbar.css"
import { useTranslation } from "react-i18next";

function HeaderAboutMENavbar() {
const { t, i18n } = useTranslation();
  return (
    <div className='HeaderAboutMENavbar'>
      <p>{t("Navbar.1")}</p>
    </div>
  )
}

export default HeaderAboutMENavbar
