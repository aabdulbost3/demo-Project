import React from "react";
import "./SectionIndex.css";
import SectionIndex2 from "../SectionIndex2/SectionIndex2";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function SectionIndex() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://api.npoint.io/8db6988fa41da4dd3645/SectionMyProjectImg")
      .then(function (response) {
        return response.json();})
      .then(function (myJson) {setData(myJson);});};
  useEffect(() => {getData();}, [data]);
  return (
    <>
      <div className="Imgdiv">
        {data.map((post) => {
          return (
            <div className="zz" key={post.id}>
              <NavLink to={"/myblog"}>
                <img src={post.link} alt="EROR401" />
              </NavLink>
            </div>
          );
        })}
      </div>
      <SectionIndex2 />
    </>
  );
}
export default SectionIndex;