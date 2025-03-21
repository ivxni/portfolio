import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import logo from '../../../assets/img/LogoFullx512NEW.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  // Optimierte Navigation mit garantiertem Scroll-Reset
  const handleNavigation = (path) => {
    // Schließe Mobile-Menü
    setIsMobileMenuOpen(false);
    
    // Sofortiges Scrollen vor der Navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Navigiere mit einem minimalen Delay, um dem Browser Zeit zum Scrollen zu geben
    setTimeout(() => {
      navigate(path);
      
      // Doppelter Scroll-Reset nach der Navigation
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
      });
    }, 5);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container" 
             role="button" 
             tabIndex="0" 
             onClick={() => handleNavigation('/')}
             onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
        >
          <img src={logo} alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span className="name">WebLabs</span>
            <span className="title">Full Stack Developer</span>
          </div>
        </div>

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
              <div 
                className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}
                onClick={() => handleNavigation('/')}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
              >
                <FontAwesomeIcon icon="home" />
                <span>Home</span>
              </div>
            </li>
            <li className="nav-item">
              <div 
                className={`nav-link ${window.location.pathname === '/skills' ? 'active' : ''}`}
                onClick={() => handleNavigation('/skills')}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/skills')}
              >
                <FontAwesomeIcon icon="code" />
                <span>Skills</span>
              </div>
            </li>
            <li className="nav-item">
              <div 
                className={`nav-link ${window.location.pathname === '/projects' ? 'active' : ''}`}
                onClick={() => handleNavigation('/projects')}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/projects')}
              >
                <FontAwesomeIcon icon="briefcase" />
                <span>Projects</span>
              </div>
            </li>
            <li className="nav-item">
              <div 
                className={`nav-link ${window.location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => handleNavigation('/contact')}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/contact')}
              >
                <FontAwesomeIcon icon="envelope" />
                <span>Contact</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 