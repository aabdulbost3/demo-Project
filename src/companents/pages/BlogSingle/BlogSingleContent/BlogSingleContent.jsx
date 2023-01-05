import React from "react";
import "./BlogSingleContent.css"
import MyBlogRight from "../../MyBlog/MyBlogHeader/MyBlogRight/MyBlogRight";
import BlogSingle_Main from "./BlogSingle_Main.css/BlogSingle_Main";
import BlogSingleContentCarusel from "./BlogSingleContentCarusel/BlogSingleContentCarusel";
import MyBlogHeaderContent1 from "../../MyBlog/MyBlogHeader/MyBlogHeaderContent1/MyBlogHeaderContent1";
import MyBlogSingleCommentInputs from "./MyBlogSingleCommentInputs/MyBlogSingleCommentInputs";
import MyBlogSingleCommentGet from "./MyBlogSingleCommentGet/MyBlogSingleCommentGet";
function BlogSingleContent() {
  return (
    <div>
      <div className="acontent">
        <div className="fdsga70">
          <BlogSingle_Main/>
          <BlogSingleContentCarusel/>
          <MyBlogHeaderContent1 />
          <MyBlogSingleCommentGet />
          <MyBlogSingleCommentInputs/>
        </div>
        <div className="fdsga30">
          <MyBlogRight />
        </div>
      </div>
    </div>
  );
}
export default BlogSingleContent;