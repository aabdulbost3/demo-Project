import React, { useRef } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function InputLogin() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body ={
      email : email.current.value,
      password : password.current.value,
    }
    const res = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:_NJ7F2DF/auth/login",body)
    window.localStorage.setItem("token" ,res.data?.authToken)
    if (res.data?.authToken) {
      setTimeout(()=>{
        navigate("/adminpage")
        window.location.reload()
      },"1000")
    }
  };
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="inputsLogin">
        <form onSubmit={HandleSubmit}>
          <b>{t("Login.4")}:</b>
          <div className="inputs">
            <input ref={email} type="email" placeholder={t("Login.4")} required/>
          </div>
          <b>{t("Login.5")}:</b>
          <div className="inputs">
            <input ref={password} type="password" placeholder={t("Login.5")} required/>
          </div>
          <div className="forgerLoginPage">
            <NavLink
            // to={Forget}
            >
              <a href="#">{t("Login.6")}</a>
            </NavLink>
          </div>
          <div className="LeftLoginButton">
            <div className="btn">
              <button className="blue-btn" type="submit">{t("Login.7")}</button>
            </div>
          </div>
        </form>

        <div className="LeftLoginButtonText">
          <p>
            {t("Login.8")} <NavLink> {t("Login.9")}</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
export default InputLogin;
