import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='foot_container'>
      <div className='footer_left'>
        <div className='footer_1'>
            <h3>Categories</h3>
            <div className='footer_category'>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
        </div>
        <div className='footer_2'>
            <h3>Contact</h3>
            <div className='footer_category'>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Categories</p>
                <p>About</p>
            </div>
        </div>
      </div>
      <div className='footer_right'></div>
    </div>
  )
}

export default Footer
