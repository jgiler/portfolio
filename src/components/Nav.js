import React from "react";
import { NavLink } from "react-router-dom";
import '../css/nav.css'

const Nav = () => (
  <div className="main-header">
    <nav className='navList'>
      <NavLink className="link" exact to="/">About me</NavLink>
      <NavLink className='link' exact to='/portfolio'>Portfolio</NavLink>
      <NavLink className='link' exact to='/contact'>Contact Me</NavLink>
    </nav>
  </div>
);

export default Nav;
