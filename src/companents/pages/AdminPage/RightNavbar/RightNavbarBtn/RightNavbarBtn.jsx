import React from 'react'
import "./RightNavbarBtn.css"
import { useState } from "react";
import SectionContact from '../../../Home/Section/SectionContact/SectionContact';
import { useTranslation } from "react-i18next";

function RightNavbarBtn() {
  const { t, i18n } = useTranslation();
  const [modal, setMoadl] = useState(false)
  return (
    <div className='RightNavbarBtn'>
        <button className='addbtn' onClick={() => {setMoadl(true);}}>{t("comments.3")}</button>
      {modal ? (
        <div className="modal">
          <div>
          <button className='falsebtn' onClick={() => {setMoadl(false);}}><i className="fa-regular fa-circle-xmark"></i></button>
          <div className="werd">
          <div className="werd2">

          <SectionContact/>
          </div>
          </div>
          </div>
          </div>) : null}
    </div>
  )
}
export default RightNavbarBtn