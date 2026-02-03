import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillGrid from './components/SkillGrid';
import ProjectCard from './components/ProjectCard';
import skillsData from './data/skills.json';
import projectsData from './data/projects.json';

// Global styles for smooth scrolling
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* SECTION 1: HOME */}
      <div id="home">
        <Hero />
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* SECTION 2: ABOUT (Placeholder) */}
        <section id="about" style={{ padding: '6rem 0' }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>
            I’m a final-year Information Science and Engineering student with a strong foundation in full-stack web development, automation, and applied AI. I enjoy building practical, real-world solutions using technologies like React, Spring Boot, MySQL, and REST APIs, with hands-on experience across frontend and backend development.

I’ve worked on impactful projects such as a Paralyzed Patient Monitoring System, where I implemented eye-blink–based communication using computer vision, and a Context-Resume RAG Chatbot that leverages vector search and LLMs for intelligent question answering. I also have experience with workflow automation using n8n and data analytics tools like Power BI and Tableau.
          </p>
        </section>

        {/* SECTION 3: EXPERIENCE (Placeholder) */}
        <section id="experience" style={{ padding: '6rem 0' }}>
          <h2 className="section-title">Experience</h2>
          <div style={{ borderLeft: '3px solid #00ff41', paddingLeft: '1.5rem' }}>
            <h3 style={{ color: 'white' }}>Web Devloper Intern</h3>
            <p style={{ color: '#00ff41' }}>United International | Fed 2025-Jun 2025</p>
            <p style={{ color: '#aaa' }}>Through my Web Developer Internship at United International, I strengthened my skills in responsive UI development, collaboration, and real-world problem solving. I’m passionate about learning new technologies, building scalable applications, and contributing to innovative software projects with real societal impact</p>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section id="projects" style={{ padding: '6rem 0' }}>
          <h2 className="section-title">Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* SECTION 5: EDUCATION (Placeholder) */}
        <section id="education" style={{ padding: '6rem 0' }}>
          <h2 className="section-title">Education</h2>
          <div className="card" style={{ background: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
            <h3 style={{ color: 'white' }}>Global Academy Of Technology</h3>
            <p style={{ color: '#ccc' }}>BE in Information Science and Engineering</p>
            <p style={{ color: '#888' }}>2022 - 2026</p>
          </div>
        </section>

        {/* SECTION 6: TECH ENTHUSIASM */}
        <section id="tech" style={{ padding: '6rem 0' }}>
          <SkillGrid 
            proficientSkills={skillsData.proficient} 
            familiarSkills={skillsData.familiar} 
          />
        </section>

       

      </main>
    </div>
  );
}

export default App;