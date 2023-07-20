import React from 'react'
import logo from '../images/airbnb-logo.png'

const Nav = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo of AirBnb" className='nav-logo' />
    </nav>
  )
}

export default Nav