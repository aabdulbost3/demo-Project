import React from 'react'
import "./HeaderAboutLeftIcon.css"
import { NavLink } from 'react-router-dom'
import {useState,useEffect} from 'react';
const HeaderAboutRightIcon=()=> {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://api.npoint.io/8db6988fa41da4dd3645/icons',)
      .then(function(response){
        return response.json();})
      .then(function(myJson) {
        setData(myJson)});}
  useEffect(()=>{
    getData()
  },[data])
  return (
    <div className='HeaderAboutRightIcon'>
      {data.map((post)=>{
        return(
          <div className='Iconsdiv' key={post.id}>
            <NavLink to={post.link}><i className={post.className}></i></NavLink>
          </div>
        )})}
    </div>
  )
}
export default HeaderAboutRightIcon