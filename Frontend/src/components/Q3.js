import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [minval , setminval] = useState(800);
    const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ ID: "", discount_percent: "", min_cart_value:"", max_discount:"",T_C:""  }]);
  const q1_desc =
    "For a min cart value between a range (like 800-900 ruppees) check available coupons and keep them in ascending order.";
  const sql_query =
    `select * from coupons where (min_cart_value between ${minval} and ${maxval}) order by discount_percent;`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter Minimum Cart value !! (BY Default MINVAL=800)  :
            <input onChange={(e)=>{setminval(e.target.value)}} type="text" />
        </label>
        <label >
        Enter Maximum Cart value !! (BY Default MAXVAL=900)  :
            <input onChange={(e)=>{setmaxval(e.target.value)}} type="text" />
        </label>
        <input className="launch_btn"
          onClick={() => {
            //   Stars();
            console.log("start");
            // console.log(hh);
            Axios.post("http://localhost:3003/q3_call_embedded", {
             minvalue:minval,
             maxvalue:maxval
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
              <th>Coupon ID</th>
              <th>discount_percent</th>
              <th>min_cart_value</th>
              <th>max_discount</th>
              <th>T_C</th>
            </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["discount_percent"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["min_cart_value"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["max_discount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["T_C"]).replace('"','').replace('"','')}</td>
            </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
