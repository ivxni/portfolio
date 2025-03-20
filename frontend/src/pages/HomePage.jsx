import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../data/projects';
import skills from '../data/skills';
import logo from '../assets/img/logo512.png';
// Import SVG logos for popular technologies
import reactLogo from '../assets/logos/react.svg';
import jsLogo from '../assets/logos/javascript.svg';
import htmlLogo from '../assets/logos/html5.svg';
import cssLogo from '../assets/logos/css3.svg';
import nodeLogo from '../assets/logos/nodejs.svg';
import mongoLogo from '../assets/logos/mongodb.svg';
import sassLogo from '../assets/logos/sass.svg';
import typescriptLogo from '../assets/logos/typescript.svg';
import pythonLogo from '../assets/logos/python.svg';
import cppLogo from '../assets/logos/cpp.svg';
import './HomePage.scss';

const HomePage = () => {
  const heroRef = useRef(null);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const shapes = heroRef.current.querySelectorAll('.shape');
      const elements3d = heroRef.current.querySelectorAll('.element-3d');
      
      // Parallax for 3D elements
      elements3d.forEach((element, index) => {
        const depth = index * 0.2 + 0.5;
        const moveX = (mouseX - 0.5) * depth * 50;
        const moveY = (mouseY - 0.5) * depth * 50;
        const rotate = (mouseX - 0.5) * depth * 20;
        
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg)`;
      });
      
      // Additional parallax for shapes
      shapes.forEach((shape, index) => {
        const depthFactor = 0.05 * (index + 1);
        const translateX = (mouseX - 0.5) * depthFactor * 100;
        const translateY = (mouseY - 0.5) * depthFactor * 100;
        
        // Get the current transform and add the parallax effect
        const currentTransform = getComputedStyle(shape).transform;
        shape.style.transform = `${currentTransform} translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Get top skills for showcase - Sort by proficiency first
  // Reorder skills to make sure HTML and CSS are the first two items
  const arrangeSkills = (a, b) => {
    // First priority: Place specific skills in desired order
    if (a.name === 'HTML5') return -1;
    if (b.name === 'HTML5') return 1;
    if (a.name === 'CSS3') return -1;
    if (b.name === 'CSS3') return 1;
    if (a.name === 'JavaScript') return -1;
    if (b.name === 'JavaScript') return 1;
    if (a.name === 'React') return -1;
    if (b.name === 'React') return 1;
    if (a.name === 'Sass/SCSS') return -1;
    if (b.name === 'Sass/SCSS') return 1;
    if (a.name === 'Node.js') return -1;
    if (b.name === 'Node.js') return 1;
    if (a.name === 'Python') return -1;
    if (b.name === 'Python') return 1;
    if (a.name === 'C++') return -1;
    if (b.name === 'C++') return 1;
    
    // Second priority: Sort by proficiency level
    if (a.proficiencyLevel !== b.proficiencyLevel) {
      return b.proficiencyLevel - a.proficiencyLevel;
    }
    
    // Third priority: Sort alphabetically
    return a.name.localeCompare(b.name);
  };
  
  const reorderedSkills = [...skills].sort(arrangeSkills);
  
  const topSkills = reorderedSkills.slice(0, 8);

  // Function to get the appropriate logo for skills
  const getSkillLogo = (skill) => {
    // Map skill names to imported SVG logos
    const logoMap = {
      'React': reactLogo,
      'JavaScript': jsLogo,
      'HTML5': htmlLogo,
      'CSS3': cssLogo,
      'Node.js': nodeLogo,
      'C++': cppLogo,
      'Sass/SCSS': sassLogo,
      'TypeScript': typescriptLogo,
      'Python': pythonLogo,
    };
    
    return logoMap[skill.name];
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* 3D Elements */}
        <div className="elements-3d">
          <div className="element-3d cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
          <div className="element-3d sphere"></div>
          <div className="element-3d prism"></div>
        </div>
        
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
                  {getSkillLogo(skill) ? (
                    <img src={getSkillLogo(skill)} alt={skill.name} className="skill-logo" />
                  ) : skill.customLogo ? (
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