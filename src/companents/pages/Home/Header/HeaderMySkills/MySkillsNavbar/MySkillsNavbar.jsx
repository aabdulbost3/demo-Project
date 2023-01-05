import React from 'react'
import "./MySkillsNavbar.css"
import { useTranslation } from "react-i18next";

function MySkillsNavbar() {
const { t, i18n } = useTranslation();
  return (
    <div className='MySkillsNavbar'>
      <h1>{t("Header.5")}</h1>
    </div>
  )
}

export default MySkillsNavbar
