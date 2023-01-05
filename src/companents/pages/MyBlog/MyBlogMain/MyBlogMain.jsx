import React from 'react'
import "./MyBlogMain.css"
import { useTranslation } from "react-i18next";

function MyBlogMain() {
    const { t, i18n } = useTranslation();
  return (
    <div className='MyBlogMain'>
      <h1>{t("Header.8")}</h1>
    </div>
  )
}
export default MyBlogMain