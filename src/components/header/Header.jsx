import React from 'react'
import logo from '../../assets/logo/tomer-logo2.png'
import './Header.css'

const Header = () => {
  return (
    <div className=' header'>
      <img className='logo-img' src={logo} alt="logo" />
    </div>
  )
}

export default Header
