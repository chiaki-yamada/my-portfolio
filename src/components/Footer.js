import React from 'react'
import footerImg from '../imgs/footer.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <p>Contact:</p>
          <a href="mailto:info@chiakiy.com">info@chiakiy.com</a>
        </div>
        <p className='copy-right'>© 2023 Chiaki Yamada</p>
      </div> 
      <div className="footer-img">
        <img src={footerImg} className="footer-img" alt="footer-img"></img>
      </div> 
    </footer>
  )
}

export default Footer;