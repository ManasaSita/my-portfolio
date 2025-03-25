import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaVideo, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../styles/sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const handleClick = (section, event) => {
    event.preventDefault(); // Prevents default anchor jump behavior
    setActiveSection(section); // Updates the active state immediately
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
  };

  return (
    <div className="sidebar">
      <h1 className="name">Manasa R</h1>
      <p className="title">Full Stack Developer | MERN Stack</p>
      <nav>
        <a 
          href="#about" 
          className={activeSection === "about" ? "active" : ""} 
          onClick={(e) => handleClick("about", e)}
        >
          About
        </a>
        <a 
          href="#skills" 
          className={activeSection === "skills" ? "active" : ""} 
          onClick={(e) => handleClick("skills", e)}
        >
          Skills
        </a>
        <a 
          href="#certification" 
          className={activeSection === "certification" ? "active" : ""} 
          onClick={(e) => handleClick("certification", e)}
        >
          Certifications
        </a>
        <a 
          href="#experience" 
          className={activeSection === "experience" ? "active" : ""} 
          onClick={(e) => handleClick("experience", e)}
        >
          Experience
        </a>
        <a 
          href="#projects" 
          className={activeSection === "projects" ? "active" : ""} 
          onClick={(e) => handleClick("projects", e)}
        >
          Projects
        </a>
      </nav>
      <div className="social-links">
        <a target="_blank" href="https://github.com/ManasaSita" title="GitHub Profile"><FaGithub /></a>
        <a target="_blank" href="https://www.linkedin.com/in/manasa-r-935695188/" title="LinkedIn Profile"><FaLinkedin /></a>
        <a target="_blank" href="mailto:maanumns04@gmail.com" title="Mail-Id"><FaEnvelope /></a>
        <a target="_blank" href="https://drive.google.com/file/d/1cuzEGrP80UGXJM_e2Xs3DZ_73HvfmL-M/view?usp=drive_link" title="Resume"><FaFilePdf /></a>
        <a target="_blank" href="https://drive.google.com/file/d/1vZJoq4nJpvFwPblU74SgFhfeqgzfg_8H/view?usp=drive_link" title="Video Resume"><FaVideo /></a>
        <a target="_blank" href="https://leetcode.com/Manasa-Sita/" title="Leet Code"><SiLeetcode /></a>
        {/* <a href="tel:+91 63645 71091" title="Phone Number"><FaPhoneAlt /></a> */}
      </div>
    </div>
  );
};

export default Sidebar;
