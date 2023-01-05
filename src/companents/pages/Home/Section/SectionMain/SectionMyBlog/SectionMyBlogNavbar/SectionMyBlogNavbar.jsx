import React from "react";
import { useTranslation } from "react-i18next";
function SectionMyBlogNavbar() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="HeaderAboutMENavbar">
        <p>{t("Header.8")}</p>
      </div>
    </div>
  );
}
export default SectionMyBlogNavbar;
