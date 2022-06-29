import "./styles/App.css";
import Homepage from "./components/Homepage.js";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import EmployeeLogin from "./components/EmployeeLogin.js";
import CustomerLogin from "./components/CustomerLogin";
import RegisterPage from "./components/RegisterPage";
import DistributorLogin from "./components/DistributorLogin.js";
import Q1 from "./components/Q1.js";
import Q2 from "./components/Q2.js";
import Q3 from "./components/Q3.js";
import Q4 from "./components/Q4.js";
import Q5 from "./components/Q5.js";
import Q6 from "./components/Q6.js";
import Q7 from "./components/Q7.js";
import Q8 from "./components/Q8.js";
import Q9 from "./components/Q9.js";
import Q10 from "./components/Q10.js";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login_page" element={<LoginPage />}/>
          <Route path="/login_page/employee_login" element={<EmployeeLogin />}/>
          <Route path="/login_page/customer_login" element={<CustomerLogin />}/>
          <Route path="/login_page/distributor_login" element={<DistributorLogin />}/>
          <Route path="/register_page" element={<RegisterPage />}/>
          <Route path="/login_page/customer_login/q1" element={<Q1 />}/>
          <Route path="/login_page/customer_login/q2" element={<Q2 />}/>
          <Route path="/login_page/customer_login/q3" element={<Q3 />}/>
          <Route path="/login_page/customer_login/q4" element={<Q4 />}/>
          <Route path="/login_page/customer_login/q5" element={<Q5 />}/>
          <Route path="/login_page/customer_login/q6" element={<Q6 />}/>
          <Route path="/login_page/customer_login/q7" element={<Q7 />}/>
          <Route path="/login_page/customer_login/q8" element={<Q8 />}/>
          <Route path="/login_page/customer_login/q9" element={<Q9 />}/>
          <Route path="/login_page/customer_login/q10" element={<Q10 />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
