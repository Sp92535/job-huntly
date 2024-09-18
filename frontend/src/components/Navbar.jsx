import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">JobFinder</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/find">Find Jobs</a></li>
        <li><a href="/post">Post a Job</a></li>
        <li><a href="/signin">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
