import React from 'react';
import {useLocation} from 'react-router-dom';


const EmployeeLogin = () => {
    const location = useLocation();
    const infor = location.state.info;
    console.log(infor);
    var string = JSON.stringify(infor);
  return (
    <div>
        <h1>Hello Employee!</h1>
        <h3>Your Details:</h3>
        {string}
    </div>
  )
}

export default EmployeeLogin