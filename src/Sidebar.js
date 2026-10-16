
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/" end>⌂ <span>Home</span></NavLink>
        <NavLink to="/emi-calculator">▦ <span>EMI Calculator</span></NavLink>
        <NavLink to="/login">⇥ <span>Login</span></NavLink>
        
        <NavLink to="/about">ⓘ <span>About</span></NavLink>
        <NavLink to="/contact">☎ <span>Contact</span></NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
