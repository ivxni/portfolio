import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="action-buttons">
            <Link to="/" className="btn btn-primary">
              <FontAwesomeIcon icon="home" className="icon-left" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FontAwesomeIcon icon="envelope" className="icon-left" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 