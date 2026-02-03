import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h4>{project.title}</h4>
        <div className="tags">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tag">{tech}</span>
          ))}
        </div>
      </div>
      
      {/* Requirement: 2-line description of the problem solved [cite: 24] */}
      <p className="project-description">
        {project.description}
      </p>

      <div className="card-footer">
        {/* MANDATORY: Direct link to GitHub Repository [cite: 23] */}
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-github"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;