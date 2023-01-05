import React from "react";
import "./PopularPostCategories.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function PopularPostCategories() {
  const [data, setData] = useState([]);
  const getData = () => {fetch("http://localhost:8000/Categories")
      .then(function (response) {return response.json();})
      .then(function (myJson) {setData(myJson);});};
  useEffect(() => {getData();}, 
[data]);
  const { t, i18n } = useTranslation();
  return (
    <div className="PopularPostCategories">
      <h2>{t("myblog.4")}</h2>
      <div className="PopularPostCategoriesp">
        {data.map((elem, index) => (
            <NavLink to={"/archive"} key={index}> {elem.tags}</NavLink>))}
          </div>
        </div>);}
export default PopularPostCategories;
