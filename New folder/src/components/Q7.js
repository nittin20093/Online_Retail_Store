import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [N , setN] = useState(5);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ p_name:"", d_name:"", quantity:"",distributor_ID:"" }]);
  const q1_desc =
    "find details of distributor of N products whose quantity left in stock is min";
  const sql_query =
    `SELECT p_name,d_name,quantity,product.distributor_ID from product JOIN distributors ON product.distributor_ID=distributors.distributor_ID ORDER BY product.quantity LIMIT ${N};`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter VALUE of N !! (BY Default VALUE=5)  :
            <input defaultValue={'5'} onChange={(e)=>{setN(e.target.value)}} type="text" />
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
              <th>product_name</th>
              <th>distributor_name</th>
              <th>quantity</th>
              <th>phone_no</th>
              </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["d_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["quantity"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["distributor_ID"]).replace('"','').replace('"','')}</td>
              </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
