import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/App.css";
import Certification from "./components/Certification";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGradientPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      let currentSection = "about"; // Default to About
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <div id="about" className="section"><About /></div>
        <div id="skills" className="section"><Skills /></div>
        <div id="certification" className="section"><Certification /></div>
        <div id="experience" className="section"><Experience /></div>
        <div id="projects" className="section"><Projects /></div>
      </div>
      <div
        className="gradient-overlay"
        style={{
          background: `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.3), transparent 80%)`,
        }}
      ></div>
    </div>
  );
};

export default App;
