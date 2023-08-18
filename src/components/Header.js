import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../imgs/logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" end className="active"><img src={logo} className='icon' alt='logo' /></NavLink></li>
          <li><NavLink to="/about" className="active">ABOUT</NavLink></li>
          <li><NavLink to="/works" className="active">WORKS</NavLink></li>
          <li><NavLink to="/reference" className="active">REFERENCE</NavLink></li>
        </ul>
      </nav>

    </header>

  )
}

export default Header;