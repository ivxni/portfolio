import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Get all unique technologies from projects
  const allTechnologies = [...new Set(
    projects.flatMap(project => project.technologies)
  )].sort();

  // Filter projects based on search query and selected technology
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTech = selectedTech === '' || 
      project.technologies.includes(selectedTech);
      
    return matchesSearch && matchesTech;
  });

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle technology filter change
  const handleTechChange = (tech) => {
    setSelectedTech(tech === selectedTech ? '' : tech);
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

        {/* Projects filter section */}
        <div className="projects-filter">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FontAwesomeIcon icon="search" className="search-icon" />
          </div>

          <div className="tech-filter">
            <h3 className="filter-title">Filter by technology:</h3>
            <div className="tech-buttons">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  className={`tech-button ${selectedTech === tech ? 'active' : ''}`}
                  onClick={() => handleTechChange(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.thumbnail} alt={project.title} />
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-summary">{project.summary}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`technology-tag ${selectedTech === tech ? 'highlighted' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <Link to={`/projects/${project.slug}`} className="view-project-btn">
                      View Project
                    </Link>
                    <div className="external-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="external-link">
                          <FontAwesomeIcon icon="external-link-alt" /> Live
                        </a>
                      )}
                      {project.sourceCode && (
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="external-link">
                          <FontAwesomeIcon icon={['fab', 'github']} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects found matching your criteria.</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => {
                setSearchQuery('');
                setSelectedTech('');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 