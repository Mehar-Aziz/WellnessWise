import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../assets/Screenshot_2024-07-22_120232-removebg-preview.png'; // Adjust the path based on your project structure

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="WellnessWise Logo" className="logo" />
        <h1>WellnessWise</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to="home" className="hover-underline-animation" onClick={handleLinkClick}>Home</Link></li>
        <li><a href="#services" className="hover-underline-animation" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#about-us" className="hover-underline-animation" onClick={handleLinkClick}>About Us</a></li>
        <li><a href="#contact-us" className="hover-underline-animation" onClick={handleLinkClick}>Contact Us</a></li>
        {isLoggedIn ? (
          <li><button className="button-17"><Link to="/login" onClick={handleLinkClick}>Make an appointment</Link></button></li>
        ) : (
          <li><button className="button-17"><Link to="/login" onClick={handleLinkClick}>Login</Link></button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
