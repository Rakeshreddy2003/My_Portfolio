import React from 'react'
import '../../css/project.css'; 

import projectImg1 from '../../assets/alumniIng.png';
import projectImg2 from '../../assets/tictac.png';
import projectImg3 from '../../assets/proj3.png';
import projectImg4 from '../../assets/drums.png';

const projects = [
  {
    title: "Alumni Connect",
    description: "A platform to connect alumni and students. Full stack project in progress.",
    imgSrc: projectImg1,
    link: "https://youtu.be/ozungY7g8NI"
  },
  {
    title: "Tic Tac Toe",
    description: "Tic tac toe is a game designed using web technologies html,css and js",
    imgSrc: projectImg2,
    link: "https://rakeshreddy2003.github.io/Tic-Tac-Toe-Game/"
  },
  {
    title: "Blog Website",
    description: "A personal blogging website to write blogs, built using React, deployed on  GitHub.",
    imgSrc: projectImg3,
    link: "https://rakeshreddy2003.github.io/Blog-website/"
  },
  {
    title: "Drum kit simulator",
    description: "A drum kit simulation created using vanilla css and javascript to mimic audio drums.",
    imgSrc: projectImg4,
    link: "https://rakeshreddy2003.github.io/Drum-Kit-game/"
  }
];

const ProjectNew = () => {
  return (
    <section className="skills section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My projects</span>
        <div >
        <div className="card-grid">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.imgSrc} alt={`Project ${index + 1}`} />
          </a>
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
        

    </section>
  )
}

export default ProjectNew