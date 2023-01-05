import React from 'react'
import "./RightNavbar.css"
import RightNavbarBtn from './RightNavbarBtn/RightNavbarBtn'
import MyBlogRightSearch from "../../MyBlog/MyBlogHeader/MyBlogRight/MyBlogRightSearch/MyBlogRightSearch"
function RightNavbar() {
  return (
    <div className='RightNavbar'>
        <div className="Logo">
            <p>Contact</p>
        </div>
        <div>
            <RightNavbarBtn/>
        </div>
        <div className='mml'>
          <MyBlogRightSearch/>
        </div>
    </div>
  )
}

export default RightNavbar