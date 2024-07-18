import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#appointment">Make an appointment</a></li>
            <li><a href="#customer">Customers</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="links">
            <li><a href="#email">meharaziz.1614@gmail.com</a></li>
            <li><a href="#address">ABC Street X, J block</a></li>
            <li><a href="#phone">+92 333 2525802</a></li>
            <li><a href="#designs">Popular Designs</a></li>
            <li><a href="#upload">New Uploads</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="#agreement">Customer Agreement</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#gdpr">GDPR</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#kit">Health Kit</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Become A Member</h4>
          <p>
            Become a member of Wellness Wise and find peaceful life
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBMIT</button>
          </form>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
