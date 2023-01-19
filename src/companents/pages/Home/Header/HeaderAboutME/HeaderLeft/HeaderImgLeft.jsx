import React from 'react'
import "./HeaderImgLeft.css"
import {useState,useEffect} from 'react';

function HeaderImgLeft() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://api.npoint.io/8db6988fa41da4dd3645/HeaderImg',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[data])
  return (
    <div className='HeaderImgLeft'>
      {data.map((post)=>{
        return(
          <div key={post.id}>
           <img src={post.link} alt="" /> 
          </div>
        )
      })}
    </div>
  )
}
export default HeaderImgLeft