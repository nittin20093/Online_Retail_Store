import React from 'react'
import '../styles/servicecard.css'

const ServiceCard = (props) => {
    // let ny = this.props.ny;
  return (
      <>
      <div>
        <div className='card-outer_box'>
            <div className='card_head'>{props.head}</div>
            <img className='card_image' src={props.card_img} alt="??" />
        </div>

      </div>
      </>
  )
}

export default ServiceCard