import React from 'react';
import '../css/Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We connect job seekers with employers for a seamless job search experience.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@jobfinder.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p><a href="https://twitter.com/JobFinder">Twitter</a></p>
          <p><a href="https://facebook.com/JobFinder">Facebook</a></p>
          <p><a href="https://linkedin.com/company/jobfinder">LinkedIn</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JobFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
