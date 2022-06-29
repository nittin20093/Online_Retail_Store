import React from 'react'
import {useLocation} from 'react-router-dom';
import '../styles/customerlogin.css';
const DistributorLogin = () => {
    const location = useLocation();
    const infor = location.state.info;
    console.log(infor);
    var string = JSON.stringify(infor);
  return (
    <div className='center_in_div'>
        <h1>Hello Distributor!</h1>
        <h3>Your Details:</h3>
        <div>{string}</div>
    </div>
  )
}

export default DistributorLogin