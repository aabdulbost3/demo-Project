import React from 'react'
import "./style.css"
function Select() {
    const selectChange = async (e) =>{
        await window.localStorage.setItem("i18nextLng" , e.target.value)
        window.location.reload();
    }
    function GetLanguage() {
        return window.localStorage.getItem("i18nextLng")
    }
  return (
    <>
    <div className="selecy">
    {GetLanguage() === "ru"?
        <select onChange={selectChange}>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
        </select>:

    GetLanguage() === "uz" ?
        <select onChange={selectChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>:
    GetLanguage() === "en" ?
        <select onChange={selectChange}>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
        </select>:null
        
    }
        </div>
    </>
  )
}

export default Select
