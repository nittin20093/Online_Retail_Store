import React from 'react'
import {useLocation} from 'react-router-dom';
import QueryCard from '../components/QueryCard';
import '../styles/customerlogin.css'

const CustomerLogin = () => {
    const location = useLocation();
    const infor = location.state.info;
    console.log(infor);
    var string = JSON.stringify(infor);
  return (
    <div className='center_in_div'>
        <h1>Hello Dear Customer!</h1>
        <h3>Your Details:</h3>
        {string}
        <div className='query_card_div'>
            <div className="query_card center_in_div">
                <QueryCard qry_desc = "1. Find the price of the most expensive Order placed by every customer." path='/login_page/customer_login/q1'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "2. People who can get free delivery" path='/login_page/customer_login/q2'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "3. For a min cart value between a range (like 800-900 ruppees) check available coupons and keep them in ascending order." path='/login_page/customer_login/q3'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "4. Find Nth highest priced item (e.g N=5)" path='/login_page/customer_login/q4'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "5. Orders which are paid through Net Banking and the order value is above some VALUE(say 300) and show only successful payments." path='/login_page/customer_login/q5'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "6. find details of products bought by a customer with given customer_ID " path='/login_page/customer_login/q6'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "7. find details of distributor of N products whose quantity left in stock is min" path='/login_page/customer_login/q7'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "8. How many customer have product with given id(say 5407) in their cart? Give details of the product and its corresponding customer." path='/login_page/customer_login/q8'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "9. Find top 'N'(say N) Most bought products of a customer with given customer_id(say 3810048166) . Also Print the details of those products and customer name." path='/login_page/customer_login/q9'/>
            </div>
            <div className="query_card">
                <QueryCard qry_desc = "10. Print the total_amount of order if there exist any product in the cart of any customer whose quantity is greater than some value(say 6)" path='/login_page/customer_login/q10'/>
            </div>

        </div>
    </div>
  )
}

export default CustomerLogin