import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import skills from '../data/skills';
import './HomePage.scss';

const HomePage = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Get top skills for showcase
  const topSkills = skills.slice(0, 8);
  
  // Helper function to determine skill progress percentage
  const getSkillProgress = (experience) => {
    switch(experience) {
      case 'Beginner':
        return '40%';
      case 'Intermediate':
        return '75%';
      case 'Advanced':
        return '95%';
      default:
        return '50%';
    }
  };
  
  // Helper function to determine progress bar color
  const getProgressColor = (experience) => {
    switch(experience) {
      case 'Beginner':
        return '#FFC107';
      case 'Intermediate':
        return '#4CAF50';
      case 'Advanced':
        return '#2196F3';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Jane Doe</span>
              <span className="title">Full Stack Developer</span>
            </h1>
            <p className="hero-description">
              I build modern, responsive, and user-friendly web applications with a focus on clean code and great user experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section home-skills-section">
        <div className="container">
          <h2 className="section-title">My Technical Skills</h2>
          <div className="skills-grid">
            {topSkills.map(skill => (
              <div 
                className="skill-card" 
                key={skill.id}
                style={{
                  '--icon-color': skill.color,
                  '--progress-percent': getSkillProgress(skill.experience),
                  '--progress-color': getProgressColor(skill.experience)
                }}
              >
                <div className="skill-icon">
                  <FontAwesomeIcon 
                    icon={skill.iconType === 'fab' ? ['fab', skill.icon] : skill.icon} 
                  />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level">{skill.experience}</div>
                <div className="skill-progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-center" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/skills" className="btn btn-secondary">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-projects">
            {featuredProjects.map(project => (
              <div className="featured-project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span className="technology-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="project-link">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full stack developer with expertise in modern web technologies. 
                With a focus on creating clean, efficient, and user-friendly applications, 
                I enjoy tackling complex problems and turning ideas into reality.
              </p>
              <p>
                My experience spans front-end development with React, back-end systems with Node.js, 
                and database management. I'm constantly learning and exploring new technologies 
                to expand my skill set and improve my craft.
              </p>
              <Link to="/skills" className="btn btn-primary">My Skills</Link>
            </div>
            {/* Placeholder for photo or illustration */}
            <div className="about-image">
              <div className="image-placeholder">
                <span>Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 