import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbarstyle.css"
import { useTranslation } from "react-i18next";
import Select from '../../../minicomp/select/select'
function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
    <section class="top-nav">
    <div>
      <h2>A.Abdujalilov</h2>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><p><Select/></p></li>
      <li><NavLink to={"/"} >{t("Navbar.0")}</NavLink></li>
      <li><NavLink to={"/aboutme"}>{t("Navbar.1")}</NavLink></li>
      <li><NavLink to={"/contact"}>{t("Navbar.2")}</NavLink></li>
      <li><NavLink to={"/archive"}>{t("Navbar.3")}</NavLink></li>
    </ul>
  </section>
  </div>
  )
}
export default Navbar