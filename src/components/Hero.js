import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    return (
      <section id="introduction" className="py-5 bg-dark text-light text-center mt-5">
      <div className="container">
        <h1 className="fw-bold">Hi, I'm Manasa R</h1>
        <p className="lead">Full Stack Developer | MERN Stack Enthusiast</p>
        <div className="d-flex justify-content-center mt-3">
          <a href="https://github.com/ManasaSita" className="btn btn-light mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manasa-r-935695188/" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:maanumns04@gmail.com" className="btn btn-danger mx-2">
            <FaEnvelope />
          </a>
        </div>
        <div className="mt-4">
          <a href="https://drive.google.com/file/d/1vZJoq4nJpvFwPblU74SgFhfeqgzfg_8H/view?usp=drive_link" className="btn btn-outline-primary mx-2" target="_blank" rel="noopener noreferrer">
            🎥 Watch Video Resume
          </a>
          <a href="https://drive.google.com/file/d/1SauEsoG2G4yu_fib8KnRoaJg_ZO-BQwd/view?usp=drive_link" className="btn btn-outline-primary mx-2">
            📄 Resume
          </a>
        </div>
      </div>
    </section>
    );
  };
  
  export default Hero;
  