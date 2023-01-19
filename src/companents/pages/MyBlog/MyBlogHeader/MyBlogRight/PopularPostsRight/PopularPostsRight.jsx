import React from "react";
import "./PopularPostsRight.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function PopularPostsRight() {
  const [data, setData] = useState([]);
  const getData = () => {fetch("https://api.npoint.io/8db6988fa41da4dd3645/pp")
      .then(function (response) {return response.json();})
      .then(function (myJson) {setData(myJson);});};
  useEffect(() => {getData();}, 
[data]);
  const { t, i18n } = useTranslation();
  return (
    <div className="PopularPostsRight">
      <h2>{t("myblog.2")}</h2>
      <div className="PopularpostContent">
        <NavLink to={"/archive"}>
        {data.map((elem, index) => (
          <div className="PPCdiv" key={index}>
            <div className="PPCimg">
              <img src={elem.imglink} alt="" />
            </div>
            <div className="PPCtext"><b>{elem.text}</b>
              <div className="PPCtextdf">
                <p>{elem.name}</p><p>{elem.data}</p>
              </div>
            </div>
          </div>))}</NavLink>
      </div>
    </div>);}
export default PopularPostsRight;