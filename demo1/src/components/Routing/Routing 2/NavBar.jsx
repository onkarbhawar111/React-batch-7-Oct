import React from "react";
import { NavLink } from "react-router-dom";
import '../NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/"><li>HOME</li></NavLink>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/about"><li>ABOUT</li></NavLink>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/contact"><li>CONTACT</li></NavLink>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/products"><li>PRODUCTS</li></NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
