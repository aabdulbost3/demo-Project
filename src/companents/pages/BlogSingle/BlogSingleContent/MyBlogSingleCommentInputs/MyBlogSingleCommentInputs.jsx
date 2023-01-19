import React from "react";
import { useRef } from "react";
import "./MyBlogSingleCommentInputs.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
function MyBlogSingleCommentInputs() {
  const message = useRef();
  const messagefam = useRef();
  const Website = useRef();
  const Description = useRef();
  const HandleSubmit = async (e) => {e.preventDefault();
    const body = {message: message.current.value,messagefam: messagefam.current.value,
    Website: Website.current.value,Description: Description.current.value,};
    const res = await axios.post(`https://api.npoint.io/8db6988fa41da4dd3645/Comment`, body,)
    message.current.value = null;
    messagefam.current.value = null;Website.current.value = null;
    Description.current.value = null;};const { t, i18n } = useTranslation();
  return (
    <div className="MyBlogSingleCommentInputs">
    <h1>{t("comments.0")}</h1>
      <form onSubmit={HandleSubmit}>
        <div className="inputsname"><div className="inpn"><p>{t("Header.10")}</p>
            <input ref={message} type="text" placeholder={t("Header.10")} /></div><div className="inpns">
            <p>{t("Header.11")}</p>
            <input ref={messagefam} type="text" placeholder={t("Header.11")} /></div></div>
        <div className="email">
          <p>{t("comments.1")}</p><input ref={Website} type="text" placeholder={t("comments.1")} /></div>
        <div className="description">
          <p>{t("Header.13")}</p><input ref={Description} type="text" placeholder={t("Header.13")} /></div>
        <div className="Contactbtn"><button type="submit" className="white-btn">{t("comments.0")}</button></div>
      </form>
    </div>);}
export default MyBlogSingleCommentInputs;