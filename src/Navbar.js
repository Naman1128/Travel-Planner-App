import React from 'react';
import './Navbar.css'; // Make sure to create a CSS file for styling
import { Link } from "react-router-dom";
import Login from "./Login";
import Blog from "./Blog";
import About from "./About";
import Plan from "./Plan";

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/"> {/* Wrap the logo image in an anchor */}
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" />
        </div></a>
      <div className="navbar-links">
        <ul>
          <li><Link to="/Plan">Plan</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/About">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
