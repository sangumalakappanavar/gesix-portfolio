import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">SANGU</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Tech Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;