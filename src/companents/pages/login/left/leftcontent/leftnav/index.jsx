import React from "react";
import "./style.css"
import { useTranslation } from "react-i18next";
import Select from "../../../../../minicomp/select/select";
function LeftNavLogin() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="ll">
        <div className="navlogin">
          <h2>{t("Login.1")}</h2>
          <div className="selectNavLogin">
          <Select />
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftNavLogin;