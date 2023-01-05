import React from "react";
import "./Header.css";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderAboutME from "./HeaderAboutME/HeaderAboutME";
import HeaderMySkills from "./HeaderMySkills/HeaderMySkills";

function Header() {
  return (
    <>
      <div className="HeaderAll">
        <HeaderMain />
        <HeaderAboutME />
        <HeaderMySkills />
      </div>
    </>
  );
}

export default Header;
