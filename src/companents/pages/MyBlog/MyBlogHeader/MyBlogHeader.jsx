import React from 'react'
import "./MyBlogHeader.css"
import MyBlogHeaderContent1 from './MyBlogHeaderContent1/MyBlogHeaderContent1'
import MyBlogHeaderContent2 from './MyBlogHeaderContent2/MyBlogHeaderContent2'
import MyBlogRight from './MyBlogRight/MyBlogRight'
function MyBlogHeader() {
  return (
    <div className='MyBlogHeader'>
        <div className="mybgdf">
            <div className='fzga70'>
                <MyBlogHeaderContent1/>
                <MyBlogHeaderContent2/>
                <MyBlogHeaderContent1/>
            </div>
            <div className='fzga30'>
                <MyBlogRight/>
            </div>
        </div>

    </div>
  )
}

export default MyBlogHeader