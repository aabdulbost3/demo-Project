import React from 'react'
import "./Footer2.css"
import { useTranslation } from "react-i18next";

function Footer2() {
    const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className='Footer2'>
      <h1>© {t('Header.15')}</h1>
    </div>
    </div>
  )
}

export default Footer2
