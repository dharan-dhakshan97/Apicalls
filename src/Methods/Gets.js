import React from 'react'
import axios from "axios";
import {useState,useEffect} from "react";
const Gets = () => {

const[pics,setPics]=useState([]);
const[strings,setStrings]=useState([]);

useEffect(()=>{
axios
.get("https://jsonplaceholder.typicode.com/photos")
.then((res)=>
{
  console.log(res);
  setPics(res.data)
})
.catch(err=>{
  console.log(err);
})
})


useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res);
      setStrings(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});







  return (
    <>
      <h1 style={{ textAlign: "center" }}>Using Axios Methods in Images</h1>
      <div>
        {pics.map((pic) => (
          // <li key={photo.id}> </li>
          <h1 key={pic.id}>
            {" "}
            <img src={pic.thumbnailUrl} style={{textAlign:'center', marginRight:'25px', width:'100px', height:'100px'}} alt="The Colors is" />{" "}
          </h1>

          // style={{textAlign:'center', width:'25px', height:'25px'}}
        ))}
      </div>

      <h1 style={{ textAlign: "center" }}>Using Axios Methods in Strings</h1>

      <ul>
        {strings.map((string) => (
          <li key={string.id}>{string.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Gets; 