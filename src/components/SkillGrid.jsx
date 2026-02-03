import React from 'react';
import './SkillGrid.css'; // Assuming you have basic CSS for grid layout

const SkillGrid = ({ proficientSkills, familiarSkills }) => {
  return (
    <section className="skills-section">
      <h3>Technical Expertise</h3>
      
      <div className="skill-category">
        <h4>Proficient</h4>
        <p className="subtitle"></p>
        <div className="grid-container">
          {proficientSkills.map((skill, index) => (
            <div key={index} className="skill-card proficient">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h4>Familiar</h4>
        <p className="subtitle"></p>
        <div className="grid-container">
          {familiarSkills.map((skill, index) => (
            <div key={index} className="skill-card familiar">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillGrid;