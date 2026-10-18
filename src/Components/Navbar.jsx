import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);

export default Navbar;