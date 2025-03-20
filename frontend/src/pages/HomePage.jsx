import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import skills from '../data/skills';
import logo from '../assets/img/logo512.png';
import './HomePage.scss';

const HomePage = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Get top skills for showcase - Sort by proficiency first
  const topSkills = [...skills]
    .sort((a, b) => b.proficiencyLevel - a.proficiencyLevel)
    .slice(0, 8);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Can / WebLabs</span>
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
                  '--progress-percent': `${skill.proficiencyLevel}%`,
                  '--progress-color': skill.color
                }}
              >
                <div className="skill-icon">
                  {skill.customLogo ? (
                    <img src={skill.customLogo} alt={skill.name} className="custom-logo" />
                  ) : (
                    <FontAwesomeIcon 
                      icon={skill.iconType === 'fab' ? ['fab', skill.icon] : skill.icon} 
                    />
                  )}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level">
                  <span className="level-text">{skill.experience}</span>
                  <span className="level-percent">{skill.proficiencyLevel}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-center">
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
            <div className="about-image">
              <img src={logo} alt="WebLabs Logo" className="logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 