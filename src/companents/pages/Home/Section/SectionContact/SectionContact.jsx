import React from 'react'
import "./SectionContact.css"
import SectionContactNavbar from './SectionContactNavbar/SectionContactNavbar'
import SectionContactInputs from './SectionContactInputs/SectionContactInputs'
function SectionContact() {
  return (
    <div className='SectionContact'>
      <SectionContactNavbar/>
      <SectionContactInputs/>
    </div>
  )
}
export default SectionContact