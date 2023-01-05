import React from 'react'
import "./SectionMain.css"
import SectionMainNavbar from "./SectionMainNavbar/SectionMainNavbar"
import SectionIndex from './SectionIndex/SectionIndex'
import SectionMyBlog from './SectionMyBlog/SectionMyBlog'
function SectionMain() {
  return (
    <div>
      <SectionMainNavbar/>
      <SectionIndex/>
      <SectionMyBlog/>
    </div>
  )
}

export default SectionMain
