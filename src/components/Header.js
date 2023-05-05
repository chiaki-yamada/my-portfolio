import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">HOME</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
          <li><NavLink to="/works" activeClassName="active">WORKS</NavLink></li>
        </ul>
      </nav>

    </header>

  )
}

export default Header;