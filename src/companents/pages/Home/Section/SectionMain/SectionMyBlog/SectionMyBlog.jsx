import React from 'react'
import "./SectionMyBlog.css"
import SectionMyBlogNavbar from './SectionMyBlogNavbar/SectionMyBlogNavbar'
import MyBlogContent from './MyBlogContent/MyBlogContent'

function SectionMyBlog() {
  return (
    <div>
        <SectionMyBlogNavbar/>
        <MyBlogContent />
    </div>
  )
}

export default SectionMyBlog
