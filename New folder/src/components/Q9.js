import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [N , setN] = useState(5);
    const [c_id , setc_id] = useState(3810048166);
  const [hh, sethh] = useState([{full_name:"",p_name:"",p_desc:"",quantity:"" }]);
  const q1_desc =
    "Find top 'N'(say N) Most bought products of a customer with given customer_id(say 3810048166) . Also Print the details of those products and customer name.";
  const sql_query =
    `select customer.full_name,s.p_name,s.p_desc,s.quantity from customer,(select product.p_name,product.p_desc,customer_ID,cart.quantity from product JOIN cart on cart.product_ID=product.product_ID WHERE cart.customer_ID=${c_id}  order by cart.quantity desc limit ${N})as s where customer.phone=s.customer_ID;`;
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
        <label >
        Enter VALUE of customer_ID !! (BY Default VALUE=3810048166)  :
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
              <th>full_name</th>
              <th>product_name</th>
              <th>product_desc</th>
              <th>quantity</th>
              </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["full_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["p_desc"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["quantity"]).replace('"','').replace('"','')}</td>
              </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
