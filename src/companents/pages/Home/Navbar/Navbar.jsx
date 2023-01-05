import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbarstyle.css"
import { useTranslation } from "react-i18next";
import Select from '../../../minicomp/select/select'
function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
    <div className='Navbar'>
      <ul>
        <ol><Select/></ol>
        <NavLink to={"/"} ><li><p>{t("Navbar.0")}</p></li></NavLink>
        <NavLink to={"/aboutme"}><li><p>{t("Navbar.1")}</p></li></NavLink>
        <NavLink to={"/contact"}><li><p>{t("Navbar.2")}</p></li></NavLink>
        <NavLink to={"/archive"}><li><p>{t("Navbar.3")}</p></li></NavLink>
      </ul>
    </div>
    </div>
  )
}
export default Navbar
