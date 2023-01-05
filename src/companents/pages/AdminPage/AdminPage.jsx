import React from 'react'
import "./AdminPage.css"
import LeftNavbar from './LeftNavbar/LeftNavbar'
import RightNavbar from './RightNavbar/RightNavbar'
import AdminRightContent from './AdminRightContent/AdminRightContent'
function AdminPage() {

  return (
    <div className='container'>
      <div className="d-f">
        <div className="iconss">
          <LeftNavbar/>
        </div>
        <div className="AdminRightNavbar">
          <RightNavbar/>
          <AdminRightContent/>
        </div>
      </div>
    </div>  
  )
}

export default AdminPage