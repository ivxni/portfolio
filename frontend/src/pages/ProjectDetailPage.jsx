import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import projects from '../data/projects';
import './ProjectDetailPage.scss';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const project = projects.find(project => project.slug === slug);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all images for the slider (thumbnail + gallery)
  const allImages = project ? [project.thumbnail, ...(project.gallery || []).filter(img => img !== project.thumbnail)] : [];

  // Stärkerer Scroll-Reset für die Detail-Seite
  useEffect(() => {
    // Verschiedene Scroll-Methoden für maximale Kompatibilität
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      // Verzögerter zweiter Versuch
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
      }, 50);
    };
    
    // Sofort ausführen
    resetScroll();
    
    // Nach dem Rendern erneut ausführen
    requestAnimationFrame(resetScroll);
  }, [slug, location.key]);

  // Auto-slide functionality
  useEffect(() => {
    if (allImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, allImages.length]);

  // Handle manual navigation
  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  // Funktion um zu prüfen, ob es sich um eine mobile App handelt
  const isMobileApp = (project) => {
    return project && project.type === "Mobile Application";
  };

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  // Function to close enlarged image
  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  // Verbesserte Projekt-Navigation mit Scroll-Reset
  const navigateToProject = (projectSlug) => {
    // Sofortiges Scrollen vor der Navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Mit minimaler Verzögerung navigieren
    setTimeout(() => {
      navigate(`/projects/${projectSlug}`);
    }, 10);
  };

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn btn-primary">
          <FontAwesomeIcon icon="arrow-left" className="icon-left" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {enlargedImage && (
        <div className="fullscreen-image-overlay" onClick={closeEnlargedImage}>
          <div className="fullscreen-image-container">
            <img src={enlargedImage} alt="Enlarged view" />
            <button className="close-fullscreen" onClick={closeEnlargedImage}>
              <FontAwesomeIcon icon="times" />
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="page-header">
          <Link to="/projects" className="back-button" onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon="arrow-left" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="project-title">{project.title}</h1>
        </div>

        <div className="project-banner">
          <div className="banner-slider">
            <img 
              src={allImages[currentImageIndex]} 
              alt={`${project.title} - ${currentImageIndex + 1}`} 
              className={`project-image ${isMobileApp(project) ? 'mobile-app-image' : ''}`} 
              onClick={() => handleImageClick(allImages[currentImageIndex])}
            />
            
            {/* Navigation arrows - only show if there are multiple images */}
            {allImages.length > 1 && (
              <>
                <button 
                  className="slider-arrow slider-arrow-left" 
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button 
                  className="slider-arrow slider-arrow-right" 
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                
                {/* Slide indicators */}
                <div className="slider-indicators">
                  {allImages.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="project-content">
          <div className="project-info">
            <div className="project-summary">
              <h2>Project Overview</h2>
              <p>{project.summary}</p>
              {project.description && (
                <div className="project-description">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="project-tech">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="project-features">
                <h2>Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="project-challenges">
                <h2>Challenges & Solutions</h2>
                {project.challenges.map((challenge, index) => (
                  <div className="challenge-item" key={index}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                    <p className="solution"><strong>Solution:</strong> {challenge.solution}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="project-sidebar">
            <div className="project-meta">
              <div className="meta-item">
                <h3>Project Type</h3>
                <p>{project.type}</p>
              </div>
              
              {project.client && (
                <div className="meta-item">
                  <h3>Client</h3>
                  <p>{project.client}</p>
                </div>
              )}
              
              {project.duration && (
                <div className="meta-item">
                  <h3>Duration</h3>
                  <p>{project.duration}</p>
                </div>
              )}
              
              {project.role && (
                <div className="meta-item">
                  <h3>My Role</h3>
                  <p>{project.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="project-gallery">
          {project.gallery && project.gallery.length > 0 && (
            <>
              <h2>Project Gallery</h2>
              <div className={`gallery-grid ${isMobileApp(project) ? 'mobile-gallery' : ''}`}>
                {project.gallery.map((image, index) => (
                  <div className="gallery-item" key={index} onClick={() => handleImageClick(image)}>
                    <img 
                      src={image} 
                      alt={`${project.title} - Screenshot ${index + 1}`} 
                      className={isMobileApp(project) ? 'mobile-app-image' : ''}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="related-projects">
          <h2>Other Projects</h2>
          <div className="related-projects-grid">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <div
                  className="related-project-card" 
                  key={relatedProject.id}
                  onClick={() => navigateToProject(relatedProject.slug)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => e.key === 'Enter' && navigateToProject(relatedProject.slug)}
                >
                  <div className="related-project-image">
                    <img 
                      src={relatedProject.thumbnail} 
                      alt={relatedProject.title} 
                      className={isMobileApp(relatedProject) ? 'mobile-app-image' : ''}
                    />
                  </div>
                  <h3>{relatedProject.title}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 