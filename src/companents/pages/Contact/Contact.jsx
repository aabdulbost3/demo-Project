import React from 'react'
import "./Contact.css"
import SectionContact from '../Home/Section/SectionContact/SectionContact'
import ContactMaps from './ContactMaps/ContactMaps'
function Contact() {
  return (
    <div className='ContactPageAllDiv container'>
      <SectionContact/>
      <ContactMaps/>
    </div>
  )
}

export default Contact
