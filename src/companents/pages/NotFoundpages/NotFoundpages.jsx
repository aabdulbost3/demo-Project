import React from 'react'
import "./NotFoundpages.css"
import { useTranslation } from "react-i18next";
function NotFoundpages() {
    const { t, i18n } = useTranslation();
  return (
    <div className="container">
    <div className='NotFoundpages'>
        <div className='ppe'>
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
            {t("comments.2")}
        </div>
    </div>
    </div>
  )
}

export default NotFoundpages