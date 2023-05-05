import React from 'react'
import footerImg from '../imgs/footer.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <p>Contact:</p>
          <a href="mailto:jian88.c26@gmail.com">jian88.c26@gmail.com</a>
        </div>
      </div> 
      <div className="footer-img">
        <img src={footerImg} className="footer-img" alt="footer-img"></img>
      </div> 
    </footer>
  )
}

export default Footer;