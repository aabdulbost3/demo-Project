import React from 'react'
import "./MyBlog.css"
import MyBlogMain from './MyBlogMain/MyBlogMain'
import MyBlogHeader from './MyBlogHeader/MyBlogHeader'
function MyBlog() {
  return (
    <div className='MyBlog container' >
      <MyBlogMain />
      <MyBlogHeader/>
    </div>
  )
}

export default MyBlog
