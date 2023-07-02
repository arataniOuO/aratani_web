import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import projectsData from './projects.json';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aratani Portfolio</h1>
      </header>
      <Carousel>
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
