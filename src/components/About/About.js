import React from 'react'
import "../../css/About.css"
import AboutImg from "../../assets/about rakesh.jpg"
import Info from './Info'
import cv from "../../assets/RakeshResume.pdf"
const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />

            <div className="about__data">
                <Info/>

                <p className="about__description">I'm Rakesh Reddy, currently in my final year of Bachelor of Technology (B.Tech). I'm a dedicated full-stack developer with experience in both front-end and back-end technologies. I've been actively involved in web development projects, working with tools like HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express, React, Node.js).
My goal is to combine my academic knowledge with hands-on experience to solve real-world problems in the field of web development. I aim to create meaningful and impactful solutions as I continue to grow my expertise. I'm passionate about building dynamic and user-friendly web applications, and I'm eager to contribute to exciting projects in this space.</p>

                
                <button type="button" className="btn btn-dark"><a href={cv} download="" className="button button--flex">Download CV <span></span>
                <i className="uil uil-file-download"> </i></a></button>
            </div>
        </div>
    </section>
  )
}

export default About