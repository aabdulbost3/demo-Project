import React from 'react'
import "./AdminRightContentNav.css"
import { useTranslation } from "react-i18next";
function AdminRightContentNav() {
    const { t, i18n } = useTranslation();
  return (
    <div>
        <div className="dfjc">
            <div className="w33">
                <b>{t("Header.10")} va {t("Header.11")}</b>
            </div>
            <div className="w33">
                <b>{t("Header.12")}</b>
            </div>
            <div className="w33">
                <b>{t("Header.13")}</b>
            </div>

        </div>
    </div>
  )
}

export default AdminRightContentNav