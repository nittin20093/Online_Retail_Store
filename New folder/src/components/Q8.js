import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [p_id , setp_id] = useState(5407);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ p_name:"", exp_date:"", full_name:"", city:"", addrss:""}]);
  const q1_desc =
    "How many customer have product with given id(say 5407) in their cart? Give details of the product and its corresponding customer.";
  const sql_query =
    `SELECT product.p_name,product.exp_date,customer.full_name,customer.city,customer.addrss FROM customer,(product JOIN cart ON product.product_ID = Cart.product_ID) WHERE product.Product_ID = '${p_id}'`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter Product_ID !! (BY Default VALUE=5407)  :
            <input defaultValue={'5407'} onChange={(e)=>{setp_id(e.target.value)}} type="text" />
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
              <th>exp_date</th>
              <th>full_name</th>
              <th>city</th>
              <th>address</th>
              </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["exp_date"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["full_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["city"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["addrss"]).replace('"','').replace('"','')}</td>
              </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
