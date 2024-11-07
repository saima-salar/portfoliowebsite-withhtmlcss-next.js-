import React from 'react';
import project from '../../styles/project.module.css';



const Projects = () => {
  return (
    <section className={project.project} id={project.project}>
      <h2 className={project.heading}>Projects</h2>
      <div className={project['timeline-items']}>
        <div className={project['timeline-item']}>
          <div className={project['timeline-dot']}></div>
          <div className={project['timeline-data']}></div>
          <div className={project['timeline-content']}>
            <h3>hackathon-milestones-GIAIC-</h3>
            <p>
              <a href="https://hackathon-milestones-giaic.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        </div>

        <div className={project['timeline-item']}>
          <div className={project['timeline-dot']}></div>
          <div className={project['timeline-data']}></div>
          <div className={project['timeline-content']}>
            <h3>ecommerce-website-next.js</h3>
            <p>
              <a href="https://ecommerce-website-next-js-saima-salars-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        </div>

        <div className={project['timeline-item']}>
          <div className={project['timeline-dot']}></div>
          <div className={project['timeline-data']}></div>
          <div className={project['timeline-content']}>
            <h3>Tic-Tac-Toe-Game-using-HTML-CSS-JavaScript</h3>
            <p>
              <a href="https://tic-tac-toe-game-using-html-css-java-script.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        </div>

        <div className={project['timeline-item']}>
          <div className={project['timeline-dot']}></div>
          <div className={project['timeline-data']}></div>
          <div className={project['timeline-content']}>
            <h3>Chrome-Extension-m3</h3>
            <p>
              <a href="https://chrome-extension-m3.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
