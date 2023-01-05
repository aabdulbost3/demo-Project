import React from 'react'
import "./Section.css"
import SectionMain from "./SectionMain/SectionMain"
import SectionContact from './SectionContact/SectionContact'

function Section() {
  return (
    <div className='Section'>
      <SectionMain/>
      <SectionContact/>
    </div>
  )
}

export default Section
