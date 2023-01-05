import React from 'react'
import "./MyBlogHeaderContent2.css"
import MyBlogContent2 from '../../../Home/Section/SectionMain/SectionMyBlog/MyBlogContent/MyBlogContent2/MyBlogContent2';
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function MyBlogHeaderContent2() {
    const { t, i18n } = useTranslation();
  return (
    <div className='MyBlogHeaderContent2'>
        <div className='Blogborder'>
            <div className='Myblognavbar'>
                <h2>{t("myblog.0")}</h2>
                <NavLink to={"/archive"}>
                    <h2>{t("myblog.1")}</h2>
                </NavLink>
            </div>
            <div className='fontsize'>
                <MyBlogContent2/>
            </div>
        </div>
    </div>
  )
}

export default MyBlogHeaderContent2