import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import './ProjectDetailPage.scss';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find(project => project.slug === slug);

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
      <div className="container">
        <div className="page-header">
          <Link to="/projects" className="back-button">
            <FontAwesomeIcon icon="arrow-left" />
            <span>Back to Projects</span>
          </Link>
          <h1 className="project-title">{project.title}</h1>
        </div>

        <div className="project-banner">
          <img src={project.thumbnail} alt={project.title} className="project-image" />
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

            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="external-link-alt" className="icon-left" />
                  Live Demo
                </a>
              )}
              
              {project.sourceLink && (
                <a href={project.sourceLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} className="icon-left" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-gallery">
          {project.gallery && project.gallery.length > 0 && (
            <>
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt={`${project.title} - Screenshot ${index + 1}`} />
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
                <Link to={`/projects/${relatedProject.slug}`} className="related-project-card" key={relatedProject.id}>
                  <div className="related-project-image">
                    <img src={relatedProject.thumbnail} alt={relatedProject.title} />
                  </div>
                  <h3>{relatedProject.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 