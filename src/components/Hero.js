import React from 'react'
import grid from '../images/photo-grid.png'

const Hero = () => {
  return (
    <section className='hero-section'>
        <img src={grid} alt="" className='hero-img' />
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by one-of-a-kind Host-all without leaving home.</p>
    </section>
  )
}

export default Hero