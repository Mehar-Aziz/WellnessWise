import React from "react";
import './Navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    // State to determine if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock function to simulate login/logout
 const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

    return(
        <nav>
            <h1>WellnessWise</h1>
            <ul>
                {isLoggedIn ? (
                    <li><button className="button-17" ><Link to="/login">Make an appointment</Link></button></li>
                ) : (
                <li><button className="button-17" ><Link to="/login">Login</Link></button></li>
                )}

                <li><a href="#contact-us" className="hover-underline-animation">
          Contact Us</a></li>

                <li><a href="#about-us" className="hover-underline-animation">
          About Us</a></li>

                <li><a href="#services" className="hover-underline-animation">
          Services</a></li>

                <li><a href="home" className="hover-underline-animation">
          Home</a></li>
            </ul>
             
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
        </nav>
    );
}

export default Navbar;