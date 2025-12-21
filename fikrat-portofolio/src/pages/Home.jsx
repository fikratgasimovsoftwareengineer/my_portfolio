import React from 'react';
import Navigation from '../components/Navigation';
// import Projects from '../components/Projects'; // Scommenta quando pronto
import { FaMicrochip, FaRobot, FaBrain, FaNetworkWired } from 'react-icons/fa'; // Icone Tech
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
            {/* Badge Tech */}
            <div style={{color: '#00f2ff', marginBottom: '10px', fontFamily: 'Roboto Mono'}}>
                &lt; SYSTEM_ONLINE /&gt;
            </div>

            <h1 className="hero-title">
                Senior AI and Robotics Researcher <br />
            </h1>
            
            {/* Sottotitolo stile codice */}
            <div className="d-flex justify-content-center">
                 <p className="hero-subtitle">
                    Specialized in Robotics, Edge AI & Autonomous Systems
                 </p>
            </div>

            <a href="#section-3" className="btn btn-tech mt-4">
                Initialize Projects
            </a>
        </div>
      </section>
      {/* Projects Section -->*/}
      <Projects/>

      {/* About Summary - Tech Style */}
      <section className="py-5" style={{backgroundColor: '#0f0f0f'}}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <FaBrain size={50} color="#00f2ff" className="mb-3"/>
              <h4 className="text-light">Deep Learning</h4>
            </div>
            <div className="col-md-3 mb-4">
              <FaMicrochip size={50} color="#7000ff" className="mb-3"/>
              <h4 className="text-light">Embedded Edge</h4>
            </div>
            <div className="col-md-3 mb-4">
              <FaRobot size={50} color="#00f2ff" className="mb-3"/>
              <h4 className="text-light">Robotics</h4>
            </div>
            <div className="col-md-3 mb-4">
              <FaNetworkWired size={50} color="#7000ff" className="mb-3"/>
              <h4 className="text-light">IoT Systems</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Qui andrà il componente Projects */}
      {/* <Projects /> */}

    </>
  );
};

export default Home;