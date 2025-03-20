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
          <h2 className="error-message">Page Not Found</h2>
          <p className="error-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="home-link">
            <FontAwesomeIcon icon="home" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 