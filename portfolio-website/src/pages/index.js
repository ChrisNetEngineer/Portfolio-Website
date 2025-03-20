// pages/index.js

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Open Sans, sans-serif', fontSize: '16px' }}>
      <header style={{
        backgroundColor: 'transparent',
        padding: '15px 0',
        textAlign: 'center',
        position: 'sticky',
        top: '20px',
        zIndex: 100,
        width: '90%',
        maxWidth: '800px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
      }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <li style={{ margin: '0 10px' }}>
              <button
                onClick={() => handleSectionClick('about')}
                className="nav-button"
              >
                About
                <span className="nav-underline"></span>
              </button>
            </li>
            <li style={{ margin: '0 10px' }}>
              <button
                onClick={() => handleSectionClick('projects')}
                className="nav-button"
              >
                Projects
                <span className="nav-underline"></span>
              </button>
            </li>
            <li style={{ margin: '0 10px' }}>
              <button
                onClick={() => handleSectionClick('contact')}
                className="nav-button"
              >
                Contact
                <span className="nav-underline"></span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div style={{ width: '90%', maxWidth: '800px', marginTop: '20px' }}>
        {activeSection === 'about' && (
          <section id="about" style={{ padding: '20px', borderBottom: '1px solid #ddd', paddingBottom: '30px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.8em', textAlign: 'center' }}>About Me</h2>
            <p style={{ fontSize: '1.1em', textAlign: 'center' }}>As a Cybersecurity undergraduate with a fervent interest in DevSecOps and IT Infrastructure, I'm driven by the pursuit of building secure and resilient systems. My hands-on experience includes practical work in managing critical security tools such as firewalls, SIEM, and SOAR, which has provided me with a solid foundation in real-world security operations. I'm eager to apply my growing knowledge and practical skills to contribute to the development of robust security practices within dynamic environments, bridging the gap between development and security</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div className="grid-item">
                <h3 style={{ fontSize: '1.3em', textAlign: 'center' }}>Cybersecurity Enthusiast</h3>
                <p style={{ textAlign: 'center' }}>Passionate about exploring the latest trends and technologies in cybersecurity.</p>
              </div>
              <div className="grid-item">
                <h3 style={{ fontSize: '1.3em', textAlign: 'center' }}>IT Infrastructure Background</h3>
                <p style={{ textAlign: 'center' }}>Strong foundation in IT infrastructure, including networking and system administration.</p>
              </div>
              <div className="grid-item">
                <h3 style={{ fontSize: '1.3em', textAlign: 'center' }}>Penetration Testing</h3>
                <p style={{ textAlign: 'center' }}>Developing skills in penetration testing and vulnerability assessment.</p>
              </div>
            </div>
            <h2 style={{ marginTop: '100px', fontSize: '1.5em', marginTop: '20px', textAlign: 'left' }}>Professional Experience</h2>
            <div style={{ marginTop: '10px' }}>
              <h3 style={{ fontSize: '1.2em', textAlign: 'left' }}>Cybersecurity Intern - Acme Corporation</h3>
              <p style={{ fontSize: '1em', textAlign: 'left' }}>January 2023 - Present</p>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                <li style={{ fontSize: '1em', textAlign: 'left' }}>Assisted in the implementation and maintenance of firewalls.</li>
                <li style={{ fontSize: '1em', textAlign: 'left' }}>Monitored security logs and investigated security incidents.</li>
                <li style={{ fontSize: '1em', textAlign: 'left' }}>Developed and tested security protocols.</li>
                <li style={{ fontSize: '1em', textAlign: 'left' }}>Contributed to the improvement of incident response procedures.</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects" style={{ padding: '20px', borderBottom: '1px solid #ddd', paddingBottom: '30px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.8em', textAlign: 'center' }}>My Projects</h2>
            <p style={{ fontSize: '1.1em', textAlign: 'center' }}>Showcase your projects here. Include images, descriptions, and links.</p>
            <div className="project" style={{ fontSize: '1.1em' }}>
              <h3 style={{textAlign: 'center'}}>Project 1</h3>
              <p style={{textAlign: 'center'}}>Description of project 1.</p>
            </div>
            <div className="project" style={{ fontSize: '1.1em' }}>
              <h3 style={{textAlign: 'center'}}>Project 2</h3>
              <p style={{textAlign: 'center'}}>Description of project 2.</p>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.8em', textAlign: 'center' }}>Contact Me</h2>
            <p style={{ fontSize: '1.1em', textAlign: 'center' }}>Email: your.email@example.com</p>
            <p style={{ fontSize: '1.1em', textAlign: 'center' }}>LinkedIn: <a href="#">Your LinkedIn Profile</a></p>
          </section>
        )}
      </div>

      <style jsx>{`
        .nav-button {
          border: none;
          background: none;
          padding: 0;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          font-family: inherit;
          font-size: 1.1em;
          position: relative;
          cursor: pointer;
        }

        .nav-underline {
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #333;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }

        .nav-button:hover .nav-underline {
          transform: scaleX(1);
        }

        .grid-item {
          border: 1px solid #ddd;
          padding: 15px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .grid-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <style jsx global>{`
        body {
          font-family: inherit;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 600px) {
          nav ul li {
            margin: 5px 5px;
          }
        }
      `}</style>
    </div>
  );
}