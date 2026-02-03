import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Sangu Arjun Malakappanavar</span>
        </h1>
        <p className="hero-role">Gesix GeoAI Intern | Full Stack</p>

        <div className="social-links">
          {/* 1. GITHUB (This was already correct!) */}
          <a 
            href="https://github.com/sangumalakappanavar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
          >
            <FaGithub />
          </a>

          {/* 2. LINKEDIN (Fixed: Added https://) */}
          <a 
            href="https://www.linkedin.com/in/sangu-malakappanavardev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
          >
            <FaLinkedin />
          </a>

          {/* 3. EMAIL (Fixed: Added mailto:) */}
          <a 
            href="mailto:sangappa1ga22is135@gmail.com" 
            className="social-btn"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* 4. RESUME LINK */}
        <a 
          href="https://gatacin30798-my.sharepoint.com/:b:/g/personal/1ga22is135_gat_ac_in/IQC4boVatI9WQKFaVG7eEnt7Af2XgerkcZ32fH0pnRIO2xc?e=vVZyGQ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
          style={{ textDecoration: 'none' }}
        >
          View Resume <FaFileAlt style={{ marginLeft: '8px' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;