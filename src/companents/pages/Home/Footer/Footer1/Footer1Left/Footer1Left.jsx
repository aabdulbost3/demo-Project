import React from 'react'
import './Footer1Left.css'
import { useTranslation } from "react-i18next";

function Footer1Left() {
    const { t, i18n } = useTranslation();
  return (
    <div className='footerleft'>
      <h2>{t("Header.16")}</h2>
      <p>{t("Header.17")}</p>
    </div>

  )
}

export default Footer1Left
