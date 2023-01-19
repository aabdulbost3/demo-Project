import React, { useRef, useState } from "react";
import "./AdminRightContentGetPost.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
function AdminRightContentGetPost() {
  const [data, setData] = useState([]);
  const [putId, setPutId] = useState(0);
    const [PutMadal, setPutMadal] = useState(false);
    const [isShown, setIsShown] = useState(true);
  const [IsError, setIsError] = useState(false);
  //    const message = useRef();
  //   const update = useRef();

  useEffect(() => {
    // setIsLoading(true)
    axios.get(`https://api.npoint.io/8db6988fa41da4dd3645/chat`).then((response) => {
      setData(response.data);
    });
    // .finally(()=> setIsLoading(false))
    // .catch((error)=> setIsError(true))
  }, [data]);
  const { t, i18n } = useTranslation();
    const HandeleDelete = async (e) => {
    const res = await axios.delete(
      `https://api.npoint.io/8db6988fa41da4dd3645/chat/${e.target.value}`
    );
    console.log(res);
  };

  
  return (
    <div>
      {IsError ? (
        <div className="wea"><p >{t("comments.4")}</p></div>
      ) : data.length == 0 ? (
        <div className="wea"><p >{t("comments.5")}</p></div>
      ) : (
        data.map((elem, index) => (
          <div className="dfjcc" key={index}>
            <div className="w33">
              <b>{elem.message} | </b>
              <b> | {elem.messagefam}</b></div>
            <div className="w33" >
              <b>{elem.Email}</b></div>
            <div className="w33 dfsb" >
              <b>{elem.Description}</b>
              <button onClick={HandeleDelete} value={elem.id} className="fa-solid fa-trash">
          </button></div></div>
        ))
      )}
    </div>
  );
}
export default AdminRightContentGetPost;