import React from 'react'
import "./style.css"
import { useTranslation } from 'react-i18next'
import LeftLogin from './left'
import RightLogin from './right'


 function Login() {
  const{t, i18n} = useTranslation()
  return (
    <>
    <div className="container">
      <div className="logindf">
        <LeftLogin/>
        <RightLogin/>
      </div>
    </div>
    </>
  )
}
export default Login