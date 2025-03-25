import React from "react";
import { RxExternalLink } from "react-icons/rx";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-card">
        <h3>Freelance Full Stack Developer</h3>
        <p className="experience-duration">Mar 2023 – Present | Bengaluru, India</p>
        <ul className="experience-list">
          <li>Built and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.</li>
          <li>Designed and implemented RESTful APIs for seamless data exchange between front-end and back-end systems.</li>
          <li>Developed secure authentication systems using JWT tokens to ensure user data protection.</li>
          <li>Deployed applications efficiently using Vercel and Render, optimizing performance and scalability.</li>
          <li>Created responsive, user-friendly interfaces with custom CSS and JavaScript for an enhanced user experience.</li>
          <li>Integrated third-party APIs to enhance application functionality and deliver dynamic content.</li>
        </ul>
      </div>
      
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
