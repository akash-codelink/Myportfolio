// import React from 'react';
import React from 'react';
import style from './Skills.module.css';

const skills = [
  {
    name: 'HTML',
    imgSrc: './Media/HTML5.png',
    description: 'Markup language for creating web pages.'
  },
  {
    name: 'CSS',
    imgSrc: './Media/css.png',
    description: 'Style sheet language for describing the look of a document.'
  },
  {
    name: 'Java',
    imgSrc: './Media/java01.png',
    description: 'High-level programming language for building applications.'
  },
  {
    name: 'JavaScript',
    imgSrc: './Media/js.png',
    description: 'Programming language for creating dynamic web content.'
  },
  {
    name: 'Spring Boot',
    imgSrc: './Media/spring.png',
    description: 'Framework for building Java-based applications.'
  },
  {
    name: 'Git',
    imgSrc: './Media/git.png',
    description: 'Version control system for tracking code'
  },
  {
    name: 'SQL',
    imgSrc: './Media/sql7.jpg',
    description: 'Language for managing data in relational databases.'
  },
  {
    name: 'React',
    imgSrc: './Media/React.webp',
    description: 'JavaScript library for building user interfaces.'
  },
  {
    name: 'API',
    imgSrc: './Media/api.png',
    description: 'Rules for building and interacting with software applications.'
  }
];

const Skills = () => {
  return (
    <div className={style.skillsContainer}>
      <h2>Let's check out my skills</h2>
      <div className={style.skillsGrid}>
        {skills.map(skill => (
          <div className={style.skillCard} key={skill.name}>
            <img src={require(`${skill.imgSrc}`)} alt={skill.name} />
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;








// import style from "./Skills.module.css";

// const Skills = () => {
//   return (
//     <div className={style.skillsContainer}>
//       <h2>Let's check out my skills</h2>
//       <div className={style.skillGrid}>
//         <div className={style.skillCard}>
//           <img src={require("./Media/HTML5.png")} alt="HTML" />
//           <h3>HTML</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/css.png")} alt="CSS" />
//           <h3>CSS</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/java01.png")} alt="java" />
//           <h3>Java</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/js.png")} alt="JavaScript" />
//           <h3>JavaScript</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/spring.png")} alt="springboot" />
//           <h3>Spring boot</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/git.png")} alt="Git" />
//           <h3>Git</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/sql7.jpg")} alt="SQL" />
//           <h3>SQL</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/React.webp")} alt="React" />
//           <h3>React</h3>
//         </div>
//         <div className={style.skillCard}>
//           <img src={require("./Media/api.png")} alt="api" />
//           <h3>Api</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;