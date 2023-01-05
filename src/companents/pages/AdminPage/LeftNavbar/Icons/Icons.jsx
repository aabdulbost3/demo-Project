import React from "react";
import "./Icons.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Select from "../../../../minicomp/select/select"
function Icons() {
    
    const [data, setData] = useState([]);
    const getData = () => {
    fetch("http://localhost:8000/iconsAdmin")
      .then(function (response) {
        return response.json();})
      .then(function (myJson){
        setData(myJson);});};
  useEffect(() => {getData();}, [data]);
  return(
    <div className='llp'>
      <div className="kkl">
        <Select/>
        </div>
        {data.map((elem, index) => 
        <div key={index} className='aas'><NavLink to={elem.link}><i className={elem.icon}></i></NavLink></div>
      )}
  </div>
  )}
export default Icons;