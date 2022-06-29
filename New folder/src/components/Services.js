import React from "react";
import "../styles/services.css";
import ServiceCard from './ServiceCard.js';
import stopwatch from '../images/stopwatch.png'
import vaccine from '../images/vaccine.png'
// import stopwatch from '../images/stopwatch.png'

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services_div">
          <div className="services_head">Our Services</div>
          <div className="lines"></div>
        </div>
        <div className="services_cards_div">
            <ServiceCard card_img={stopwatch} head="24 X 7  Delivery and Support System"/>
            <ServiceCard card_img={vaccine} head="Fully Vaccinated Staff and Delivery Agents"/>
            <ServiceCard head="Returns Accepted At NO Extra Costs"/>
        </div>
      </div>
    </>
  );
};

export default Services;
