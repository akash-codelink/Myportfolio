import React from 'react';
import styles from './Project.module.css';

const projects = [
  {
    title: 'Quiz Application',
    tech: 'Spring Boot, REST API, PostgreSQL',
    github: 'https://github.com/akash-codelink/quiz-application',
    imgSrc: './Media/quiz.app.jpg',
  },
  {
    title: 'Car Rental System',
    tech: 'Java',
    github: 'https://github.com/akash-codelink/CarRentalApp',
    imgSrc: './Media/car.rental.jpg',
  },
  {
    title: 'Meta',
    tech: 'Angular, Express',
    github: 'https://github.com/yourprofile/meta',
    imgSrc: './Media/car.rental.jpg',
  },
  // Add more projects here
];

const Project = () => {
  return (
    <div className={styles.projectSection}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.subtitle}>Check out some of my personal projects</p>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={require(`${project.imgSrc}`)} alt={project.title} className={styles.projectImage} />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <div className={styles.overlay}>
              <h2>{project.title}</h2>
              <p>{project.tech}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
