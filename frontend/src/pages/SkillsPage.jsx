import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from '../data/skills';
import './SkillsPage.scss';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools' },
    { id: 'devops', name: 'DevOps' }
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="skills-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">My Skills</h1>
          <p className="page-description">
            Here are the technologies and tools I use to bring ideas to life.
            Hover over each skill to see more details.
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
                <FontAwesomeIcon 
                  icon={skill.iconType === 'fab' ? ['fab', skill.icon] : skill.icon} 
                  className="skill-icon"
                  style={{ '--icon-color': skill.color }}
                />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-tooltip">
                <p className="skill-experience">{skill.experience}</p>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Levels Legend */}
        <div className="skills-legend">
          <h3 className="legend-title">Experience Levels:</h3>
          <div className="legend-items">
            <div className="legend-item">
              <span className="level-indicator beginner"></span>
              <span className="level-name">Beginner</span>
            </div>
            <div className="legend-item">
              <span className="level-indicator intermediate"></span>
              <span className="level-name">Intermediate</span>
            </div>
            <div className="legend-item">
              <span className="level-indicator advanced"></span>
              <span className="level-name">Advanced</span>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="learning-goals">
          <h2 className="section-title">What I'm Learning Next</h2>
          <div className="learning-goals-content">
            <p>
              I believe in continuous learning and staying current with emerging technologies. 
              Here are some areas I'm currently exploring and improving:
            </p>
            <ul className="goals-list">
              <li>Advanced TypeScript patterns and best practices</li>
              <li>Next.js and server-side rendering optimization</li>
              <li>GraphQL API design and implementation</li>
              <li>Cloud architecture and serverless computing</li>
              <li>Test-driven development methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 