import React from 'react'
import "./MyBlogRight.css"
import MyBlogRightSearch from './MyBlogRightSearch/MyBlogRightSearch'
import PopularPostsRight from './PopularPostsRight/PopularPostsRight'
import PopularPostTags from './PopularPostsRight/PopularPostTags/PopularPostTags'
import PopularPostCategories from './PopularPostsRight/PopularPostCategories/PopularPostCategories'
import MyBlogRightICons from './MyBlogRightICons/MyBlogRightICons'
import MyBlogLoginInput from './MyBlogLoginInput/MyBlogLoginInput'
function MyBlogRight() {
  return (
    <div className='MyBlogRight'>
        <MyBlogRightSearch/>
        <PopularPostsRight />
        <PopularPostTags/>
        <PopularPostCategories />
        <MyBlogRightICons/>
        <MyBlogLoginInput/>
    </div>
  )
}

export default MyBlogRight