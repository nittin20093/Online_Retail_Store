import React from "react";
import { useState } from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import '../styles/loginpage.css';



// `select acc_type where phone=${phone} and passwd=${pass}`

const LoginPage = () => {

  const navigate = useNavigate();

  function login_authentication (res,ph){
    if(res.data == false){
      console.log("NOT fOUND");
      alert('No Login details Found! Please Register!');
    }
    else{
      console.log("found  " + res.data[0]['acc_type']); 
      if(res.data[0]['acc_type']==='E'){
        const r = clk1(`select * from Employee where phone='${ph}';` , ph ,'/login_page/employee_login');
      }
      else if(res.data[0]['acc_type']==='C'){
        const r = clk1(`select * from customer where phone='${ph}';` , ph ,'/login_page/customer_login');
      }
      else if(res.data[0]['acc_type']==='D'){
        const r = clk1(`select * from distributors where distributor_ID='${ph}';` , ph ,'/login_page/distributor_login');
      }
    }
  };

  const clk = (qry , ph) => {
    
  console.log("start");
  Axios.post("http://localhost:3003/update", {
    query: qry,
  }).then((res) => {
    login_authentication(res,ph);
  });
};

  const clk1 = (qry,ph,nav) => {
  console.log("start");
  Axios.post("http://localhost:3003/update", {
    query: qry,
  }).then((res) => {
    console.log(res);
    navigate(nav , {state:{info:res.data[0]}});
  });
};


  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [resp, setResp] = useState({});
  return (
    <>
      <div className="login_page_div">
      <h1>Login Form</h1>
        <form
          onSubmit={(e) => {
            console.log("submitted");
            const response = clk(
              `select acc_type from Login where phone='${phone}' and passwd='${pass}';`
              ,phone
            );
            e.preventDefault();
          }}
        > 
        <div className="login_page_div">
          <label>
            Phone no.:
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </label>
          <br/>
          <input type="submit" value="Login" />
          </div>
          <br/><br/><br/><br/>
          <div className="login_page_div">
          {/* <h5>If You want to register Click any button Below ....</h5>
            <input type="button" value="Register as Customer" onClick={()=>{
              navigate('/register_page' , {state:{type:'C'}} )
            }} />
            <input type="button" value="Register as Employee" onClick={()=>{
              navigate('/register_page' , {state:{type:'R'}} )
            }} />
            <input type="button" value="Register as Distributor" onClick={()=>{
              navigate('/register_page' , {state:{type:'D'}} )
            }} /> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
