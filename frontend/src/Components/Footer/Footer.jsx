import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
//change name from pintester to pinterest in code and images file names
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>Zayr is a premier South Asian contemporary label that aims at reinterpreting south asian heritage and artisanship.</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
          </div><div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2025 -All rights reserved-harisizm</p>
        </div>
    </div>
  )
}

export default Footer