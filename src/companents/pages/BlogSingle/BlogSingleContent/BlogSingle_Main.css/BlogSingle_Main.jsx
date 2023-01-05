import React from 'react'
import "./BlogSingle_Main.css"
import { useTranslation } from "react-i18next";
import PopularPostTags from '../../../MyBlog/MyBlogHeader/MyBlogRight/PopularPostsRight/PopularPostTags/PopularPostTags';
function BlogSingle_Main() {
    const { t, i18n } = useTranslation();
  return (
    <div className='BlogSingle_Main'>
      <div className="blogsinglemaindiv">
        <div className="cas">
          <h2>{t("myblog.8")}</h2>
        </div>
        <p>{t("myblog.9")}</p>
        <img src="https://res.cloudinary.com/dmm39dlkm/image/upload/v1672745733/Rectangle_46_haewg3.png" alt="" />
        <p>{t("myblog.9")}</p>
        <div className="qwerty">
          <img src="https://res.cloudinary.com/dmm39dlkm/image/upload/v1672751600/Rectangle_47_bppwyg.png" alt="" /><p>{t("myblog.9")}</p>
        </div>
        <p>{t("myblog.9")}</p>
      </div>
      <div className="ytrewq">
          <PopularPostTags/>
        </div>
    </div>
  )
}

export default BlogSingle_Main
