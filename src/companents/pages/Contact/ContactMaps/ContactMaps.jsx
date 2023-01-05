import React from 'react'
import "./ContactMaps.css"
function ContactMaps() {
  return (
    <div className='ContactMaps'>
      <div className="maps">
        <div className="mapstext">
            <h1>Google Map Location</h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2954.301796748234!2d69.1844491863262!3d41.34691352646168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1672586898868!5m2!1sru!2s"  referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default ContactMaps
