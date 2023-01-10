import React from 'react'
import "./MyBlogRightICons.css"
import { NavLink } from 'react-router-dom'
import {useState,useEffect} from 'react';
const MyBlogRightICons=()=> {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://localhost:8000/icons',)
      .then(function(response){
        return response.json();})
      .then(function(myJson) {
        setData(myJson)});}
  useEffect(()=>{
    getData()
  },[data])
  return (
    <div className='MyBlogRightICons'>
      {data.map((post)=>{
        return(
          <div className='Iconsdiv' key={post.id}>
            <NavLink to={post.link}><h1 className={post.className} id="ww"></h1></NavLink>
          </div>
        )})}
    </div>
  )
}
export default MyBlogRightICons