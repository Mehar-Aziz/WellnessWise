import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li>About Us</li>
            <li>Make an appointment</li>
            <li>Customers</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="links">
            <li>meharaziz.1614@gmail.com</li>
            <li>ABC Street X, J block</li>
            <li>+92 333 2525802</li>
            <li>Popular Designs</li>
            <li>New Uploads</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li>Customer Agreement</li>
            <li>Privacy Policy</li>
            <li>GDPR</li>
            <li>Security</li>
            <li>Health Kit</li>
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
