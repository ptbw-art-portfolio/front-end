import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navBar">
      <Link to='/'>
        <i className="navIcon fas fa-home" title="Home"></i>
      </Link>

      <Link to='/upload'>
      <i className="navIcon fas fa-plus-circle" title="Upload"></i>
      </Link>

      <Link to='/sign-in'>
      <i className="navIcon fas fa-sign-in-alt" title="Sign in/Register"></i>
      </Link>
    </nav>
  );
}

export default NavBar;
