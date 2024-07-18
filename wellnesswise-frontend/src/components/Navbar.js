import React from "react";
import './Navbar.css' 

function Navbar() {
    return(
        <nav>
            <h1>WellnessWise</h1>
            <ul>
                <li><button>Make an appointment</button></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;