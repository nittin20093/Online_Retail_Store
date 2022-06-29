import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [c_id , setc_id] = useState(3810048166);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ p_name:"", SP:"", category:"", quantity:"", p_desc:"", rating:"" }]);
  const q1_desc =
    "find details of products bought by a customer with given customer_ID";
  const sql_query =
    `Select p_name,SP,category,quantity,p_desc,rating from product where product_ID in (SELECT product_ID from cart WHERE customer_ID=${c_id});`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter customer_ID !! (BY Default VALUE=3810048166)  :
            <input defaultValue={'3810048166'} onChange={(e)=>{setc_id(e.target.value)}} type="text" />
        </label>
        <input className="launch_btn"
          onClick={() => {
            //   Stars();
            console.log("start");
            // console.log(hh);
            Axios.post("http://localhost:3003/update", {
              query: sql_query,
            }).then((res) => {
              console.log(res);
              if(res.data==false) alert("No data matches your search!")
              // print_res(res);
              sethh(res.data);
            });
          }}
          type="button"
          value="Launch"
        />

        <table>
          <thead>
            <tr>
              <th>p_name</th>
              <th>SP</th>
              <th>category</th>
              <th>quantity</th>
              <th>p_desc</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["SP"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["category"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["quantity"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_desc"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["rating"]).replace('"','').replace('"','')}</td>
            </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
