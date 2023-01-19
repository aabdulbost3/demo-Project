import React, { useRef, useState, useEffect } from "react";
import "./SectionContactInputs.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
function SectionContactInputs() {
  const message = useRef();
  const messagefam = useRef();
  const Email = useRef();
  const Description = useRef();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      message: message.current.value,
      messagefam: messagefam.current.value,
      Email: Email.current.value,
      Description: Description.current.value,
    };
    const res = await axios.post(`https://api.npoint.io/8db6988fa41da4dd3645/chat`, body);
    message.current.value = null;
    messagefam.current.value = null;
    Email.current.value = null;
    Description.current.value = null;
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="ContactCompanents">
      <form onSubmit={HandleSubmit}>
        <div className="inputsname">
          <div className="inpn">
            <p>{t("Header.10")}</p>
            <input ref={message} type="text" placeholder={t("Header.10")} />
            </div>
            <div className="inpn">
            <p>{t("Header.11")}</p>
            <input ref={messagefam} type="text" placeholder={t("Header.11")} />
          </div>
        </div>
        <div className="email">
          <p>{t("Header.12")}</p>
          <input ref={Email} type="email" placeholder={t("Header.12")} />
        </div>
        <div className="description">
          <p>{t("Header.13")}</p>
          <input ref={Description} type="text" placeholder={t("Header.13")} />
        </div>
        <div className="Contactbtn">
          <button type="submit" className="white-btn">
            {t("Header.14")}
          </button>
        </div>
      </form>
    </div>
  );
}
export default SectionContactInputs;
