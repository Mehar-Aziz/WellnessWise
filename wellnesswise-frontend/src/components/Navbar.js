import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <h1>WellnessWise</h1>
            <ul>
                <li><button className="button-17" ><Link to="/login">Login</Link></button></li>
                <li><a href="/contact" className="hover-underline-animation">Contact</a></li>
                <li><a href="/about" className="hover-underline-animation">About Us</a></li>
                <li><a href="/services" className="hover-underline-animation">Services</a></li>
                <li><a href="/" className="hover-underline-animation">Home</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;