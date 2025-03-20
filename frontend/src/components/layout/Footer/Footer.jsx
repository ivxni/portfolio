import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Contact Section */}
        <div className="contact-section" id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            Feel free to reach out if you have any questions or if you'd like to collaborate on a project.
          </p>
          
          <div className="contact-methods">
            <a href="mailto:example@example.com" className="contact-method">
              <FontAwesomeIcon icon="envelope" />
              <span>example@example.com</span>
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Jane Doe. All rights reserved.
          </p>
          
          <div className="footer-nav">
            <Link to="/" className="footer-nav-link">Home</Link>
            <Link to="/skills" className="footer-nav-link">Skills</Link>
            <Link to="/projects" className="footer-nav-link">Projects</Link>
          </div>
          
          <p className="made-with">
            Made with React & SCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 