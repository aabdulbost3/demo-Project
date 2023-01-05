import React from 'react'
import "./SectionMainNavbar.css"
import { useTranslation } from "react-i18next";

function SectionMainNavbar() {
const { t, i18n } = useTranslation();
  return (
    <div>
      <div className='HeaderAboutMENavbar'>
      <p>{t("Header.7")}</p>
    </div>
    </div>
  )
}

export default SectionMainNavbar
