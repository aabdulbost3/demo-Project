import React from 'react'
import "./ArchiveMain.css"
import { useTranslation } from "react-i18next";

function ArchiveMain() {
    const { t, i18n } = useTranslation();
  return (
    <div className='ArchiveMain'>
      <h4>{t("archive.3")}</h4>
    </div>
  )
}
export default ArchiveMain