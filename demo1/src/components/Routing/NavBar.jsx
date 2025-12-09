import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* <a href="/"><li>HOME</li></a>
            <a href="/contact"><li>CONTACT</li></a>
            <a href="/about"><li>ABOUT</li></a> */}

          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/"><li>HOME</li></NavLink>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/about"><li>ABOUT</li></NavLink>
          <NavLink className={(e)=>e.isActive ? 'red' : ''} to="/contact"><li>CONTACT</li></NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
