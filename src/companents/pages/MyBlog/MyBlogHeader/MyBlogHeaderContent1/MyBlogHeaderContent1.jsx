import React from 'react'
import "./MyBlogHeaderContent1.css"
import MyBlogContent1 from '../../../Home/Section/SectionMain/SectionMyBlog/MyBlogContent/MyBlogContent1/MyBlogContent1'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function MyBlogHeaderContent1() {
    const { t, i18n } = useTranslation();
  return (
    <div className='MyBlogHeaderContent1'>
        <div className='Blogborder'>
            <div className='Myblognavbar'>
                <h2>{t("myblog.0")}</h2>
                <NavLink to={"/archive"}>
                    <h2>{t("myblog.1")}</h2>
                </NavLink>
            </div>
            <div className='fontsize'>
                <MyBlogContent1/>
            </div>
        </div>
    </div>
  )
}

export default MyBlogHeaderContent1