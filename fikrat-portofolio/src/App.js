import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- IMPORTANTE: Carica Bootstrap
import './style/style.css';                    // <--- IMPORTANTE: Nuovo percorso corretto
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
<<<<<<< HEAD
    <Router basename='/my_portfolio'>
=======
    <Router basename="/my_portfolio">
>>>>>>> refs/remotes/origin/main
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;