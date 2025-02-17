import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Front-End</h3>
          <p>React.js, JavaScript, Bootstrap, Meteor.js, HTML, CSS</p>
        </div>
        <div className="skill-category">
          <h3>Back-End</h3>
          <p>Node.js, Express.js, Meteor.js, RESTful API, Java, MongoDB, SQL</p>
        </div>
        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, Robo3T, VS Code, Linux, JIRA, Vercel, Render</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
