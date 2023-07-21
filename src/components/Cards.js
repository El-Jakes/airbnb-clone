import React from 'react'
import katie from '../images/katie.png'
import star from '../images/star.png'

const Cards = (props) => {
  return (
    <section>
        <div className='card'>
        <img className='card-img' src={katie} alt="Katie Zaferes wearing a swim suit with a swim cap and goggles" />
        <div className='card-stats'>
            <img src={star} alt="a red star" className='card-star' />
            <span>props.rating</span>
            <span className='gray-tint'>{props.review} • </span>
            <span className='gray-tint'>{props.country}</span> 
            
        </div>
        <p className='cardi-title'>{props.title}</p>
        <p><span className='card-price'>From {props.price}</span> / person</p>
        </div>
    </section>
  )
}

export default Cards