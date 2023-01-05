import React from 'react'
import "./ArchiveContent.css"
import MyBlogRight from '../../MyBlog/MyBlogHeader/MyBlogRight/MyBlogRight'
import MyBlogContent2 from '../../Home/Section/SectionMain/SectionMyBlog/MyBlogContent/MyBlogContent2/MyBlogContent2'
import MyBlogContent1 from '../../Home/Section/SectionMain/SectionMyBlog/MyBlogContent/MyBlogContent1/MyBlogContent1'
function ArchiveContent() {
  return (
    <div>
      <div className="acontent">
            <div className='azga70'>
                <MyBlogContent2/>
                <MyBlogContent1/>
                <MyBlogContent2/>
            </div>
            <div className='zga30'>
                <MyBlogRight/>
            </div>
        </div>
    </div>
  )}
export default ArchiveContent