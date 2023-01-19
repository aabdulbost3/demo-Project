import React, { useRef, useState } from "react";
import "./MyBlogSingleCommentGet.css";
import { useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
function MyBlogSingleCommentGet() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [IsError, setIsError] = useState(false);
  useEffect(() => {
    axios.get(`https://api.npoint.io/8db6988fa41da4dd3645/Comment`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error)=> setIsError(true))
  }, [data]);
  return (
    <div className="MyBlogSingleCommentGet">
        {IsError ? <h2>Network Error 500</h2>:
        data.length == false ? <h2>Loading...</h2>:
        data.length == 0 ? <h2>Malumot yo'q</h2>:
        data.map((elem, index) => 
        <div key={index}>
          <h2>{elem.id} {t("archive.2")}</h2>

          <div className="MyBlogComentName">
            <div className="imgdf">
              <img src="https://www.transparentpng.com/thumb/user/black-male-icon-clipart-png-Uc8rbw.png" alt="" />
            </div>
            <div className="pdf">
              <div className="pddf">
                <h3 >{elem.message}</h3>
                <h3 >{elem.messagefam}</h3>
              </div>
              <div className="MyBlogDescriptionnn">
                <span>{elem.Description}</span>
              </div>
            </div>
          </div>
          
        </div>
      )}
    
    </div>
  )
}
export default MyBlogSingleCommentGet;

