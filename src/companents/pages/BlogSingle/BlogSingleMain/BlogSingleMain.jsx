import "./BlogSingleMain.css"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import React, { useRef, useState } from "react";
function BlogSingleMain() {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState([]);
    const [IsError, setIsError] = useState(false);
  useEffect(() => {axios.get(`https://demopr-0c8d.restdb.io/rest/demoprComment`).then((response) => {setData(response.data);}).catch((error)=> setIsError(true))}, [data]);
  return (
    <div className='BlogSingleMain'><h4>Lorem ipsum dolor sit amet consectetur. Vel a s.</h4>
      <div className="BlogSingleMainDivdf"><h5><i className="fa-solid fa-calendar-check"></i>{t("archive.0")}</h5>
      <h5><i className="fa-solid fa-person-dress-simple"></i>{t("archive.1")}</h5>
       {data.map((elem, index) => <h5 key={index}><i className="fa-sharp fa-solid fa-comments"></i>{elem.id}{t("archive.2")}</h5>)}</div></div>)}
export default BlogSingleMain