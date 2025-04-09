import React from 'react';
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
            <a href="mailto:contact@web-labs.io" className="contact-method">
              <FontAwesomeIcon icon="envelope" />
              <span>contact@web-labs.io</span>
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/ivxni" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://www.linkedin.com/in/berkcan-cadirci-5945a9341/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://twitter.com/weblabs_io" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} WebLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 