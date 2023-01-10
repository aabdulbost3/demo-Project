import React from "react";
import "./MyBlogRightSearch.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
function MyBlogRightSearch() {
  const [data, setData] = useState([]);
  const getData = () => {fetch("http://localhost:8000/top100Films")
      .then(function (response) {return response.json();
      }).then(function (myJson) {setData(myJson);});};
  useEffect(() => {getData();}, [data]);
  return (
    <div className="MyBlogRightSearch">
      <Stack spacing={9} >
        <Autocomplete freeSolo id="free-solo-2-demo" disableClearable
          options={data.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params} label="Search input"
              InputProps={{...params.InputProps, type: "search",}}/>
          )}/>
      </Stack>
    </div>);
}
export default MyBlogRightSearch;