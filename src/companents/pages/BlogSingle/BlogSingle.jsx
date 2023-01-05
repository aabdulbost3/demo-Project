import React from 'react'
import "./BlogSingle.css"
import BlogSingleMain from "./BlogSingleMain/BlogSingleMain"
import BlogSingleContent from './BlogSingleContent/BlogSingleContent'
function BlogSingle() {
  return (
    <div className='BlogSingle container'>
      <BlogSingleMain/>
      <BlogSingleContent/>
    </div>
  )
}

export default BlogSingle
