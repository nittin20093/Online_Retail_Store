import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [minval , setminval] = useState(500);
  const [hh, sethh] = useState([{ customer_id: "", PIN: "" , addrss:"" ,city:"",coupon_ID:"",date_of_order:"", delivery_charges:"",discount:"",expected_delivery:"",feedback:"",  full_name:"", order_ID:"",order_status:"", phone:"", price:"", rating:"", taxes:"", total_amount:"" }]);
  const q1_desc =
    "Find the People who can get free delivery";
  const sql_query =
    `select * from customer join orders on phone = orders.Customer_ID where orders.total_amount>${minval};`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter Minimum Order value to get FREE DELIVERY !! (BY Default MINVAL=500)  :
            <input onChange={(e)=>{setminval(e.target.value)}} type="text" />
        </label>

        <input className="launch_btn"
          onClick={() => {
            //   Stars();
            console.log("start");
            // console.log(hh);
            Axios.post("http://localhost:3003/q2_call_embedded", {
              minvalue:minval
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
              <th>Customer_ID</th>
              <th>PIN</th>
              <th>Address</th>
              <th>city</th>
              <th>coupon_ID</th>
              <th>date_of_order</th>
              <th>delivery_charges</th>
              <th>discount</th>
              <th>expected_delivery</th>
              <th>feedback</th>
              <th>full_name</th>
              <th>order_ID</th>
              <th>order_status</th>
              <th>phone</th>
              <th>price</th>
              <th>rating</th>
              <th>taxes</th>
              <th>total_amount</th>
            </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["customer_id"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["PIN"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["addrss"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["city"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["coupon_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["date_of_order"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["delivery_charges"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["discount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["expected_delivery"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["feedback"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["full_name"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["order_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["order_status"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["phone"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["price"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["rating"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["taxes"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["total_amount"]).replace('"','').replace('"','')}</td>
            </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
