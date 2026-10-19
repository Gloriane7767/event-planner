import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/ideas">Ideas</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      {user ? (
        <button className="reset-button" onClick={handleLogout}>
          Log out ({user.email})
        </button>
      ) : (
        <NavLink to="/login">Log in</NavLink>
      )}
    </nav>
  );
};

export default Navbar;