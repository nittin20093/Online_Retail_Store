import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [minval , setminval] = useState(6);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{total_amount:""}]);
  const q1_desc =
    "Print the total_amount of order if there exist any product in the cart of any customer whose quantity is greater than some value(say 6)";
  const sql_query =
    `select total_amount from orders where customer_ID = ANY(select customer_id from cart where quantity>${minval});`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter VALUE !! (BY Default VALUE=6)  :
            <input defaultValue={'6'} onChange={(e)=>{setminval(e.target.value)}} type="text" />
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
              <th>Total Amount</th>
              </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["total_amount"]).replace('"','').replace('"','')}</td>
              {/* <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_desc"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["quantity"]).replace('"','').replace('"','')}</td> */}
              </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
