import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import InputLogin from "../leftlogininput/InputLogin";
function LeftcontentText() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="ll">
        <div className="leftcontent">
          <h2>{t("Login.2")}</h2>
          <p>{t("Login.3")}</p>
        </div>
        <div className="inputs">
          <InputLogin />
        </div>
      </div>
    </div>
  );
}
export default LeftcontentText;