import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Definiamo le categorie
  // NOTA: Le 'key' devono corrispondere ESATTAMENTE al campo 'category' in projectsData.js
  const categories = [
    { key: 'all', label: 'ALL_SYSTEMS' },
    { key: 'udemy', label: 'UDEMY_COURSES' },
    { key: 'openCV_robotics', label: 'OPENCV_ROBOTICS' }, // Corretto maiuscole/minuscole
    { key: 'avatar_ai', label: '2D_3D_GRAPHICS' },       // Corretto key per matchare i dati
    { key: 'deep_learning', label: 'DEEP_LEARNING' },
    { key: 'embedded_desktop_dev', label: 'EMBEDDED_DEV' },
    { key: 'web_ai', label: 'WEB_AI' },
    {key:'socrates_ai', label:'Socrates_AI'}
  ];

  return (
    <section className="section-3 py-5" id="section-3">
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5">
            <h2 className="section-heading">Project Database</h2>
            <div style={{height: '2px', width: '100px', background: '#00f2ff', margin: '0 auto', boxShadow: '0 0 10px #00f2ff'}}></div>
        </div>

        {/* Pulsanti Filtro */}
        <div className="text-center mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`btn filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Griglia Progetti Animata */}
        <motion.div layout className="row">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="col-md-4 mb-4"
              >
                <div className="project-card-wrapper">
                  <img src={project.img} className="card-img-top" alt={project.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mt-auto">
                        <a href={project.link} className="btn-project" target="_blank" rel="noopener noreferrer">
                        {project.btnText || "ACCESS_CODE"}
                        </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
