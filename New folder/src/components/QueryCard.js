import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/querycard.css';
// import Q1 from '../components/Q1.js';

const QueryCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className='qry_card'>
        <div className='qry_desc'>
            {props.qry_desc}
        </div>
        <input onClick={()=>{
            navigate(props.path);
            }} type="button" value="Launch" />
    </div>
  )
}

export default QueryCard