import React from "react";
import "./MyBlogContent.css";
import MyBlogContent1 from "./MyBlogContent1/MyBlogContent1";
import MyBlogContent2 from "./MyBlogContent2/MyBlogContent2";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function MyBlogContent() {
const { t, i18n } = useTranslation();
  return (
    <div>
      <MyBlogContent1 />
      <MyBlogContent2 />
      <div className="MyBlogButton">
        <NavLink to={"/myblog"}><p className="white-btn">{t("Header.9")}</p></NavLink>
      </div>
    </div>
  );
}
export default MyBlogContent;