import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- IMPORTANTE: Carica Bootstrap
import './style/style.css';                    // <--- IMPORTANTE: Nuovo percorso corretto
import Home from './pages/Home';
import About from './pages/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import MatrixBackground from './components/MatrixBackground';
import Certificates from './pages/Certificates';
function App() {
  return (
    <Router basename="/my_portfolio">
      <MatrixBackground color='#0ae211' speed={0.8}></MatrixBackground>
      <Navigation /> {/* Spostato qui per essere visibile in tutte le pagine */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;