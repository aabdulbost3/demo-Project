import React from 'react'
import "./SectionContactNavbar.css"
import { useTranslation } from "react-i18next";
function SectionContactNavbar() {
const { t, i18n } = useTranslation();
  return (
    <div className='ContactNavbarh1'>
        <h1>{t("Navbar.2")}</h1>
    </div>
  )
}
export default SectionContactNavbar