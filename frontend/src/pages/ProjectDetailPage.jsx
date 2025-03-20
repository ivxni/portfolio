import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import './ProjectDetailPage.scss';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the project based on slug
  useEffect(() => {
    const foundProject = projects.find(p => p.slug === id);
    
    if (foundProject) {
      setProject(foundProject);
      setSelectedImage(foundProject.images[0]);
    } else {
      // Redirect to not found page if project doesn't exist
      navigate('/not-found');
    }
  }, [id, navigate]);
  
  if (!project) {
    return <div className="loading">Loading project details...</div>;
  }
  
  // Handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  
  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';  // Prevent scrolling when modal is open
  };
  
  // Close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';  // Re-enable scrolling
  };

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Back button */}
        <Link to="/projects" className="back-button">
          <FontAwesomeIcon icon="arrow-left" />
          <span>Back to Projects</span>
        </Link>
        
        {/* Project header */}
        <header className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-summary">{project.summary}</p>
          
          <div className="project-meta">
            <div className="completion-date">
              <span className="meta-label">Completed:</span>
              <span className="meta-value">{project.completionDate}</span>
            </div>
            
            <div className="project-links">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                  <span>Live Demo</span>
                </a>
              )}
              
              {project.sourceCode && (
                <a 
                  href={project.sourceCode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link source-link"
                >
                  <FontAwesomeIcon icon={['fab', 'github']} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </header>
        
        {/* Project gallery */}
        <section className="project-gallery">
          <div className="main-image">
            <img 
              src={selectedImage} 
              alt={`${project.title} screenshot`} 
              onClick={() => openModal(selectedImage)}
            />
            <div className="image-overlay">
              <span className="zoom-hint">Click to zoom</span>
            </div>
          </div>
          
          <div className="image-thumbnails">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => handleImageSelect(image)}
              >
                <img src={image} alt={`${project.title} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Project details */}
        <section className="project-details">
          <div className="technologies-used">
            <h2 className="section-heading">Technologies Used</h2>
            <div className="technologies-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-description">
            <h2 className="section-heading">Project Description</h2>
            <div className="description-content">
              {project.description.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image modal */}
        {isModalOpen && (
          <div className="image-modal" onClick={closeModal}>
            <button className="close-modal" onClick={closeModal}>
              <span>&times;</span>
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt={`${project.title} large view`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage; 