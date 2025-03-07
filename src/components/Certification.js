import React from "react";
import { RxExternalLink } from "react-icons/rx";
import "../styles/certification.css";

const certificationsData = [
  {
    id: 1,
    title: "Full Stack Development, MERN Stack",
    issuer: "UpGrad",
    link: "https://drive.google.com/file/d/1dWCbiHO-eOG8cHdR6iTDu-oPOV4LgY0D/view"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    issuer: "Cutshort",
    link: "https://cutshort.io/certificate/107240"
  },
  {
    id: 3,
    title: "Java (Advanced)",
    issuer: "Cutshort",
    link: "https://cutshort.io/certificate/112611"
  },
  {
    id: 4,
    title: "CSS Certification",
    issuer: "CodeKaro",
    link: "https://codekaro.in/course-certificate/0b9186597aa6b880"
  }
];

const Certification = () => {
  return (
    <div className="certification-container">
      <h2>Certifications</h2>
      <ul>
        {certificationsData.map((cert) => (
          <li key={cert.id} className="certification-card">
            <h4>
                {cert.title} - {cert.issuer} {" "}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                <RxExternalLink />
                </a>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
