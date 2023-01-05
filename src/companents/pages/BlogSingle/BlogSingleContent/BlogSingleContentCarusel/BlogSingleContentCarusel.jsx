import React from "react";
import "./BlogSingleContentCarusel.css";
import { useTranslation } from "react-i18next";
function BlogSingleContentCarusel() {
  const { t, i18n } = useTranslation();
  return (
    <div className="BlogSingleContentCarusel">
      <div className="BlogSingleContentCaruselContent ee">
        <p>
{t("myblog.10")}<b><i className="fa-solid fa-left-long"></i><p>{t("myblog.12")}</p></b></p>
        <img src="https://res.cloudinary.com/dmm39dlkm/image/upload/v1672757303/Rectangle_49_qemfny.png" alt=""/>
      </div>
      <div className="BlogSingleContentCaruselContent ">
        <img src="https://res.cloudinary.com/dmm39dlkm/image/upload/v1672757303/Rectangle_49_qemfny.png" alt=""/>
        <p>{t("myblog.10")}
          <b><p>{t("myblog.11")}</p><i className="fa-solid fa-right-long"></i></b></p>
      </div>
    </div>
  );}
export default BlogSingleContentCarusel;