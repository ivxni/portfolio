import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactPage.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message should be at least 20 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll simulate a successful form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully! I will get back to you as soon as possible.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <h3>Email</h3>
              <p>contact@example.com</p>
              <a href="mailto:contact@example.com" className="info-link">Send an email</a>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me on LinkedIn</p>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="info-link">
                View Profile
              </a>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
              <h3>GitHub</h3>
              <p>Check out my code repositories</p>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="info-link">
                View GitHub
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                <div className="message-icon">
                  <FontAwesomeIcon icon={formStatus.error ? 'exclamation-circle' : 'check-circle'} />
                </div>
                <p>{formStatus.message}</p>
                {formStatus.error && (
                  <button 
                    className="try-again-btn"
                    onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                  >
                    Try Again
                  </button>
                )}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? 'error' : ''}
                  />
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <FontAwesomeIcon icon="paper-plane" className="icon-right" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 