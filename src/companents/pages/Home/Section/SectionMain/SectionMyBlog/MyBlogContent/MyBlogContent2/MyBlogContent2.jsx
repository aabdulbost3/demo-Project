import React from 'react'
import "./MyBlogContent2.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function MyBlogContent2() {
    const [data, setData] = useState([]);
    const getData = () => {
    fetch("https://api.npoint.io/8db6988fa41da4dd3645/MyBlogContent2").then(function (response) {
        return response.json();}).then(function (myJson) {
        setData(myJson);});};
  useEffect(() => {getData();}, [data]);
  return (
    <div className='MyBlogContent2'>
      {data.map((post) => {
        return (
          <div className="MyBlogBig2" key={post.id}>
            <NavLink to={"/blogsingle"}>
              <img src={post.link} alt='EROR401'/>
            </NavLink>
            <div className="MyBlogContentText2">
                <h3>{post.h3}</h3>
                <p>{post.p}</p>
                <div className="MyBlogDf2">
                  <b>{post.b}</b>
                  <span>{post.data}</span>
                </div>
            </div>
          </div>
        );})}
        </div>)}
export default MyBlogContent2