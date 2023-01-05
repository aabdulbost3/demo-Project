import React from "react";
import "./PopularPostTags.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function PopularPostTags() {
  const [data, setData] = useState([]);
  const getData = () => {fetch("http://localhost:8000/tag")
      .then(function (response) {return response.json();})
      .then(function (myJson) {setData(myJson);});};
  useEffect(() => {getData();},
[data]);
  const { t, i18n } = useTranslation();
  return (
    <div className="PopularPostTags">
      <h2>{t("myblog.3")}</h2>
      <div className="PopularPostTagsp">
        {data.map((elem, index) => (
            <NavLink to={"/archive"} key={index}>{elem.tags}</NavLink>))}
          </div>
    </div>);}
export default PopularPostTags