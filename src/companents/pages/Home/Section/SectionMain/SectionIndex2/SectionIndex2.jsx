import React from "react";
import "./SectionIndex2.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function SectionIndex2() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:8000/SectionMyProjectImg2")
      .then(function (response) {
        return response.json();})
      .then(function (myJson) {
        setData(myJson);});
  };
  useEffect(() => {getData();}, [data]);
  return (
    <div className="Imgdiv">
      {data.map((post) => {
        return (
          <div className="zz" key={post.id}>
            <NavLink to={"/archive"}>
              <img src={post.link} alt='EROR401'/>
            </NavLink>
          </div>
        );})}
    </div>);}
export default SectionIndex2;