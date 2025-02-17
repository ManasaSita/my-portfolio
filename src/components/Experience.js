import React from "react";
import { RxExternalLink } from "react-icons/rx";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <h3>
          Associate Software Engineer | Full Stack Development, Glider AI {" "}
          <a href="https://glider.ai" target="_blank" rel="noopener noreferrer" className="company-link" >
            <RxExternalLink />
          </a>
        </h3>
        <p className="experience-duration">Apr 2022 – Jan 2023 | Bengaluru, India</p>
        <ul className="experience-list">
          <li>Developed and optimized candidate reports from chatbot interactions, streamlining the hiring process by 25%.</li>
          <li>Designed custom question types ("Rating" and "Unit") to enhance candidate assessment and reduced recruitment cycle time by 20%.</li>
          <li>Implemented the "Rating" question type, allowing candidates to rate their skills on a scale of 1 to 5, providing recruiters with deeper insights.</li>
          <li>Developed the "Unit" question type to help recruiters understand candidates’ payment unit preferences, improving hiring efficiency.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
