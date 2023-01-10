import React from 'react'
import "./MyBlogLoginInput.css"
import { useTranslation } from "react-i18next";
import MyBlogRightSearch from "../MyBlogRightSearch/MyBlogRightSearch"
function MyBlogLoginInput() {
  const { t, i18n } = useTranslation();

  return (
    <div className='MyBlogLoginInput'>
      <h2>{t("myblog.5")}</h2>
      <p>{t("myblog.6")}</p>
      <div className="MyBlogLoginInputdf">
        <div className="width70">
          <MyBlogRightSearch/>
        </div>
        <div className="width30">
          <button><p>Sing Up</p></button>
        </div>
      </div>
      <p>{t("myblog.7")}</p>

    </div>
  )
}

export default MyBlogLoginInput