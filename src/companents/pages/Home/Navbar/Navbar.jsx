import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbarstyle.css"
import { useTranslation } from "react-i18next";
import Select from '../../../minicomp/select/select'
function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
    <section className="top-nav">
    <div>
      <h2>A.Abdujalilov</h2>
    </div>
    <p><Select/></p>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><NavLink to={"/"} >{t("Navbar.0")}</NavLink></li>
      <li><NavLink to={"/aboutme"}>{t("Navbar.1")}</NavLink></li>
      <li><NavLink to={"/contact"}>{t("Navbar.2")}</NavLink></li>
      <li><NavLink to={"/archive"}>{t("Header.18")}</NavLink></li>
      <li className='poiu'><NavLink to={"/myblog"}>{t("Navbar.3")}</NavLink></li>
    </ul>
  </section>
  </div>
  )
}
export default Navbar