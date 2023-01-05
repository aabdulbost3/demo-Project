import React from 'react'
import "./AdminRightContent.css"
import AdminRightContentNav from './AdminRightContentNav/AdminRightContentNav'
import AdminRightContentGetPost from './AdminRightContentGetPost/AdminRightContentGetPost'
function AdminRightContent() {
  return (
    <div className='container'>
      <AdminRightContentNav/>
      <AdminRightContentGetPost/>
    </div>
  )
}

export default AdminRightContent