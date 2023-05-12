import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../imgs/logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active"><img src={logo} className='icon' alt='logo'></img></NavLink></li>
          <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
          <li><NavLink to="/works" activeClassName="active">WORKS</NavLink></li>
          <li><NavLink to="/reference" activeClassName="active">REFERENCE</NavLink></li>
        </ul>
      </nav>

    </header>

  )
}

export default Header;