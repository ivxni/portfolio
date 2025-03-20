import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="name">Jane Doe</span>
          <span className="title">Full Stack Developer</span>
        </Link>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon="home" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/skills" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon="code" />
                <span>Skills</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/projects" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon="briefcase" />
                <span>Projects</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon="envelope" />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 