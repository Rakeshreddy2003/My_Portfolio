import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="a-dark about__box ">
        <i className="bi bi-briefcase about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Fresher</span>
        </div>

        <a href="#projects" className='a-dark'><div className="about__box">
        <i className="uil uil-books about__icon"></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">completed</span>
        </div></a>

        <a href="#contact" className="a-dark"><div className="about__box">
        <i className="bi bi-headphones about__icon"></i>
            <h3 className="about__title">Contact</h3>
            <span className="about__subtitle">7981631520</span>
        </div></a>
    </div>
  )
}

export default Info