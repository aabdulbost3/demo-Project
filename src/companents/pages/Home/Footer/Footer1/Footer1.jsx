import React from 'react'
import "./Footer1.css"
import Footer1Left from './Footer1Left/Footer1Left';
import Footer1Right from './Footer1Right/Footer1Right';
function Footer1() {

  return (
        <div className="container">
      <div className='foterall'>
        <Footer1Left/>
        <Footer1Right />
    </div>
    </div>
  )
}

export default Footer1
