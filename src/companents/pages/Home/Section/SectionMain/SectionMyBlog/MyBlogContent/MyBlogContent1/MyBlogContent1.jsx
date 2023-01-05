import React from 'react'
import "./MyBlogContent1.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function MyBlogContent1() {
     const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:8000/MyBlogContent")
      .then(function (response) {
        return response.json();})
      .then(function (myJson){
        setData(myJson);});
  };
  useEffect(() => {getData();}, [data]);
  return (
    <div className='MyBlogContent1'>
      {data.map((post) => {
        return (
          <div className="MyBlogBig" key={post.id}>
            <NavLink to={"/blogsingle"}>
              <img src={post.link} alt='EROR401'/>
            </NavLink>
            <div className="MyBlogContentText">
                <h3>{post.h3}</h3>
                <p>{post.p}</p>
                <div className="MyBlogDf">
                  <b>{post.b}</b>
                  <span>{post.data}</span>
                </div>
            </div>
          </div>);})}
        </div>)}
export default MyBlogContent1