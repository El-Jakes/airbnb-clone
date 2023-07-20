import React from 'react'
import katie from '../images/katie.png'
import star from '../images/star.png'

const Cards = () => {
  return (
    <section>
        <div className='card'>
        <img className='card-img' src={katie} alt="Katie Zaferes wearing a swim suit with a swim cap and goggles" />
        <div className='card-stats'>
            <img src={star} alt="a red star" className='card-star' />
            <span>5.0</span>
            <span className='gray-tint'>(6) • </span>
            <span className='gray-tint'>USA</span> 
            
        </div>
        <p className='cardi-title'>Life lessons with Katie Zaferes</p>
        <p><span className='card-price'>From $136</span> / person</p>
        </div>
    </section>
  )
}

export default Cards