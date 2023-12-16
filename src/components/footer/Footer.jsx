import React from 'react'
import './Footer.css'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='general_container footer'>
      <p>All rights reserved &copy; TOM3R {year}.</p>
    </div>
  )
}

export default Footer
