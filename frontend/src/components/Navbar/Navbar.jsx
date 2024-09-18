import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import your CSS module

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Link to="/">JobHuntly</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find">Find</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/signup">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
