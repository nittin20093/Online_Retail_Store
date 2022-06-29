import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [N , setN] = useState(4);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ product_ID: "" , p_name:"", quantity:"", CP:"", SP:"", discount:"", distributor_ID:"", category:"", p_desc:"", exp_date:"", rating:"" }]);
  const q1_desc =
    "Find Nth highest priced item (e.g N=5)";
  const sql_query =
    `select * from product p1 where ${N}=(select count(distinct sp) from product p2 where p2.sp>p1.sp);`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter value of N !! (BY Default N=5)  :
            <input onChange={(e)=>{setN(e.target.value-1)}} defaultValue={5} type="text" />
        </label>
        <input className="launch_btn"
          onClick={() => {
            //   Stars();
            console.log("start");
            // console.log(hh);
            Axios.post("http://localhost:3003/q4_call_embedded", {
              n:N
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
              <th>product_ID</th>
              <th>product_name</th>
              <th>quantity</th>
              <th>Cost_price</th>
              <th>Selling_price</th>
              <th>discount</th>
              <th>distributor_ID</th>
              <th>category</th>
              <th>product_description</th>
              <th>expiry_date</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["product_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["quantity"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["CP"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["SP"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["discount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["distributor_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["category"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_desc"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["exp_date"]).replace('"','').replace('"','')}</td>
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
