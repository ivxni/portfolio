import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  // Funktion um zu prüfen, ob es sich um eine mobile App handelt
  const isMobileApp = (project) => {
    return project.type === "Mobile Application";
  };

  return (
    <div className="projects-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            Explore a collection of my recent work. Each project showcases different skills and technologies.
          </p>
        </header>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className={isMobileApp(project) ? 'mobile-app-image' : ''}
                />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <Link to={`/projects/${project.slug}`} className="view-project-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 