import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- IMPORTANTE: Carica Bootstrap
import './style/style.css';                    // <--- IMPORTANTE: Nuovo percorso corretto
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router basename='/my_portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;