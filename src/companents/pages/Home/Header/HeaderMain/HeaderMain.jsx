import React from "react";
import "./HeaderMain.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function HeaderMain() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="HeaderMain">
        <div>
          <h1>{t("Header.0")}</h1>
          <h2>{t("Header.1")}</h2>
          <div className="HeaderMainbtn">
            <NavLink to={"/myblog"}>
                <p className="white-btn">{t("Header.2")}</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
