import React from 'react';
import Navigation from '../components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaFileDownload } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Navigation />
      
      {/* Usiamo una classe custom 'about-section' invece di bg-light */}
      <div className="about-section">
        <Container className="py-5">
          <Row className="align-items-center">
            
            {/* Colonna Immagine Profilo */}
            <Col lg={4} className="text-center mb-5 mb-lg-0">
              <div className="profile-img-container">
                <img 
                  src="/images/Fikrat.jpeg" 
                  alt="Fikrat Gasimov" 
                  className="img-fluid profile-img" 
                />
                <div className="profile-glow"></div>
              </div>
              <h2 className="mt-4 profile-name">Fikrat Gasimov</h2>
              <p className="profile-title">Senior AI Supervisor</p>
            </Col>

            {/* Colonna Testo */}
            <Col lg={8}>
              <div className="about-content">
                <h3 className="section-heading text-left mb-4">
                  <span style={{color: '#00f2ff'}}>&lt;</span> WHO AM I ? <span style={{color: '#00f2ff'}}>/&gt;</span>
                </h3>

                {/* Blocco Academic */}
                <div className="mb-5 info-block">
                  <h4 className="info-title"><FaGraduationCap className="mr-2" /> Academic Journey</h4>
                  <p className="text-muted text-justify">
                    My fullname is Fikrat Gasimov and originally I am from Azerbaijan. I did my bachelor degree in 
                    <strong className="text-light"> University of Glasgow</strong>, in Great Britain, in Computer Engineering faculty.
                    Additionally, I had done my Master Degree in <strong className="text-light">University of Bologna</strong>, 
                    majoring in Robotics & AI in Italy. In the master years, I followed my major based on Research area of 
                    Deep Learning applied for Autonomous Driving Cars.
                  </p>
                  <p className="text-muted text-justify">
                    I am Embedded Software and Hardware Scientist. My main interest is to work on sectors such as 
                    Drones, Embedded hardware, Automotive, Machine Learning, as well as CyberSecurity. 
                    I have 6 years of experience in the reference sectors.
                  </p>
                </div>

                {/* Blocco Work */}
                <div className="mb-5 info-block">
                  <h4 className="info-title"><FaBriefcase className="mr-2" /> Current Work Experience</h4>
                  <p className="text-light">
                    <strong style={{color: '#00f2ff'}}>09/2024 – Ongoing | Rome, Italy</strong><br />
                    Senior AI  Researcher and  Tutor<br />
                    <span className="text-muted">@ UNINETTUNO TELEMATICA UNIVERSITY </span>
                  </p>
                </div>

                {/* Bottoni */}
               <div>
                  <a 
                    href="/resumes/Updated_CV.pdf"   /* 1. Assicurati che il nome coincida col file in public */
                    className="btn btn-tech mr-3" 
                    download="Updated_CV.pdf" /* 2. Questo è il nome che avrà il file scaricato */
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload className="mr-2"/> Download Resume
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;