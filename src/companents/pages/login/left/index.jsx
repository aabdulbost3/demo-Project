import React from "react";
import "./style.css";
import LeftNavLogin from "./leftcontent/leftnav";
import LeftcontentText from "./leftcontent/LeftcontentText/LeftcontentText";

function LeftLogin() {
  return (
    <div className="leftall">
    <LeftNavLogin/>
    <LeftcontentText/>

    </div>
  );
}

export default LeftLogin;
