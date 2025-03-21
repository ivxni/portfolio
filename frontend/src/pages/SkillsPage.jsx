import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from '../data/skills';
import './SkillsPage.scss';

// Import der benutzerdefinierten Logos
import reactLogo from '../assets/logos/react.svg';
import jsLogo from '../assets/logos/javascript.svg';
import htmlLogo from '../assets/logos/html5.svg';
import cssLogo from '../assets/logos/css3.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import sassLogo from '../assets/logos/sass.svg';
import pythonLogo from '../assets/logos/python.svg';
import cppLogo from '../assets/logos/cpp.svg';
import csharpLogo from '../assets/logos/csharp.svg';
import reactNativeLogo from '../assets/logos/reactnative.svg';
import angularLogo from '../assets/logos/angular.svg';
import azureLogo from '../assets/logos/azure.svg';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'devops', name: 'DevOps' }
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Funktion zum Abrufen des richtigen Logos
  const getSkillLogo = (skill) => {
    switch(skill.name) {
      case 'React':
        return <img src={reactLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'JavaScript':
        return <img src={jsLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'HTML5':
        return <img src={htmlLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'CSS3':
        return <img src={cssLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'Node.js':
        return <img src={nodejsLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'MongoDB':
        return <img src={mongodbLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'Sass/SCSS':
        return <img src={sassLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'Python':
        return <img src={pythonLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'C++':
        return <img src={cppLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'C#':
        return <img src={csharpLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'React Native':
        return <img src={reactNativeLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'Angular':
        return <img src={angularLogo} alt={skill.name} className="skill-custom-logo" />;
      case 'Azure':
        return <img src={azureLogo} alt={skill.name} className="skill-custom-logo" />;
      default:
        return (
          <FontAwesomeIcon 
            icon={skill.iconType === 'fab' ? ['fab', skill.icon] : skill.icon} 
            className="skill-icon"
            style={{ color: skill.color }}
          />
        );
    }
  };

  return (
    <div className="skills-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">My Skills</h1>
          <p className="page-description">
            Technologies and tools I use to bring ideas to life.
          </p>
        </header>

        {/* Skills categories filter */}
        <div className="skills-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {filteredSkills.map(skill => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon-wrapper">
                {getSkillLogo(skill)}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-experience">{skill.experience}</p>
            </div>
          ))}
        </div>

        {/* Learning Goals - Simplified */}
        <div className="learning-goals">
          <h2 className="section-title">Learning Next</h2>
          <div className="goals-list">
            <div className="goal-item">Advanced TypeScript patterns</div>
            <div className="goal-item">Next.js optimization</div>
            <div className="goal-item">GraphQL API design</div>
            <div className="goal-item">Cloud architecture</div>
            <div className="goal-item">Test-driven development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 