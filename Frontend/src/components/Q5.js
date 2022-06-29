import React, { useEffect } from "react";
import "../styles/q1.css";
import Axios from "axios";
import { useState } from "react";


const Q1 = () => {
    const [minval , setminval] = useState(900);
    // const [maxval , setmaxval] = useState(900);
  const [hh, sethh] = useState([{ amount:"", coupon_ID:"", customer_id:"", date_of_order:"", delivery_charges:"", discount:"", expected_delivery:"", feedback:"", mode:"",order_ID:"",order_status:"",payment_date:"", payment_status:"", price:"", rating:"", taxes:"", total_amount:"", transaction_ID:"" }]);
  const q1_desc =
    "Orders which are paid through Net Banking and the order value is above some VALUE and show only successful payments. (e.g VALUE=900)";
  const sql_query =
    `SELECT * FROM orders JOIN payments ON payments.order_ID = orders.order_ID WHERE (mode='net-banking' AND total_amount>${minval} AND payment_status='successful');`;
  return (
    <div>
      <div id="q1_div">
        <h1 style={{backgroundColor:"orange"}}>Welcome to query Handler!</h1>
        <br />
        <h4 style={{backgroundColor:"lightgreen"}}>{q1_desc}</h4>
        <h5 style={{backgroundColor:"yellow"}}><u>SQL QUERY :</u> {'    ' + sql_query}</h5>
        <label >
        Enter VALUE !! (BY Default VALUE=900)  :
            <input defaultValue={'900'} onChange={(e)=>{setminval(e.target.value)}} type="text" />
        </label>
        <input className="launch_btn"
          onClick={() => {
            //   Stars();
            console.log("start");
            // console.log(hh);
            Axios.post("http://localhost:3003/q5_call_embedded", {
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
              <th>amount</th>
              <th>coupon_ID</th>
              <th>customer_id</th>
              <th>date_of_order</th>
              <th>delivery_charges</th>
              <th>discount</th>
              <th>expected_delivery</th>
              <th>feedback</th>
              <th>mode</th>
              <th>order_ID</th>
              <th>order_status</th>
              <th>payment_date</th>
              <th>payment_status</th>
              <th>price</th>
              <th>rating</th>
              <th>taxes</th>
              <th>total_amount</th>
              <th>transaction_ID</th>
            </tr>
          </thead>
          <tbody>
            
                {hh.map((e,i)=>{
                return (
                    <tr key={i}>
              <td>{JSON.stringify(hh[i]["amount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["coupon_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["customer_id"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["date_of_order"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["delivery_charges"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["discount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["expected_delivery"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["feedback"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["mode"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["order_ID"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["order_status"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["payment_date"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["payment_status"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["price"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["rating"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["taxes"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["total_amount"]).replace('"','').replace('"','')}</td>
              <td>{JSON.stringify(hh[i]["transaction_ID"]).replace('"','').replace('"','')}</td>
            </tr>
                );})}

          </tbody>
        </table>
        
        
      </div>
    </div>
  );
};

export default Q1;
