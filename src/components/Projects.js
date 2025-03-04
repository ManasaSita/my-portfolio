import React, { useState } from "react";
import "../styles/projects.css";
import { RxExternalLink } from "react-icons/rx";

const projectsData = [
  {
    id: 1,
    title: "Bookshelf (Mini Social Network for Book Lovers)",
    techStack: "MERN Stack, HTML/CSS",
    apis: "GoogleBooks API, localStorage Web API",
    features: [
      "User authentication with JWT",
      "Manage books (add, review, rate, update progress)",
      "Social interactions (add friends, accept requests, chat)",
      "Chat and Recommend books to friends"
    ],
    challenges: "Handling user interactions and database structure",
    liveLink: "https://book-app-og0e.onrender.com/",
    image: "/images/BookShelf .png"
  },
  {
    id: 2,
    title: "Cookie Clicker Game",
    techStack: "MERN Stack, HTML/CSS",
    apis: "localStorage Web API",
    features: [
      "Click-based incremental game",
      "Auto-upgrades and multipliers",
      "Stores progress using local storage"
    ],
    challenges: "Game balancing and optimization",
    liveLink: "https://cookie-clicker-plum.vercel.app/",
    image: "/images/Cookie Clicker.png"
  },
  {
    id: 3,
    title: "User Management Dashboard",
    techStack: "ReactJS, CSS",
    apis: " JSONPlaceholder API, Fetch API,",
    features: [
      "View, add, edit, and delete users",
      "Fetch user data from a mock backend API",
      "Form validation and error handling",
      "Implementation of pagination, responsive UI"
    ],
    challenges: "Handling API interactions smoothly",
    liveLink: "https://user-management-dashboard-coral.vercel.app/",
    image: "images/User Management.png"
  },
  {
    id: 4,
    title: "Task Manager App",
    techStack: "MERN Stack, Bootstrap, JWT",
    apis: "RESTful APIs, localStorage Web API",
    libraries: "Axios",
    features: [
      "User Authentication: Secure login/register using JWT",
      "Task Management: Create, edit, delete, and mark task status",
      "Private Routes: Protected access based on authentication status",
      "Real-time Updates: Auto-refresh task lists and progress tracking",
      "Role-based Access: Different user permissions for task actions"
    ],
    challenges: "Implementing smooth task updates and UI responsiveness",
    liveLink: "https://task-manager-app-taupe.vercel.app/login",
    image: ""
  },
  {
    id: 5,
    title: "Weather Forecast App",
    techStack: "React.js, Next.js, Express.js",
    apis: "OpenWeather API, HERE Maps Geocoding API",
    libraries: "react-chartjs-2, Axios",
    features: [
      "Real-time weather display with temperature, humidity, and wind speed",
      "Multi-day weather forecast",
      "Interactive weather graphs for hourly trends",
      "Geolocation support for location-based searches",
      "Optimized API calls with caching",
    ],
    challenges: "UI responsiveness, API optimization",
    liveLink: "https://github.com/ManasaSita/weather-forecast",
    image: "../src/images/WeatherForecast 2.png"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
        >
          {/* Project Image */}
          {/* <img src={project.image} alt={project.title} className="project-image" /> */}
          
          <h3>
            {project.title} {" "}
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link" >
              <RxExternalLink />
            </a>
          </h3>
          
          {activeProject === project.id && (
            <div className="project-details">
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              {project.apis && <p><strong>APIs Used:</strong> {project.apis}</p>}
              {project.libraries && <p><strong>Libraries:</strong> {project.libraries}</p>}
              <p><strong>Features:</strong></p>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
