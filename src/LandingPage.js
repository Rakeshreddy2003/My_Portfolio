import React from 'react'
import Header from './components/Header'
import Home from './components/HomeSection/Home'
import About from './components/About/About';
import ProjectNew from './components/project/ProjectNew';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './css/custom.css'
import './css/App.css'

function LandingPage() {
  return (
    <div>
      <Header/>
      <Home/>
      <About />
      <Skills />
      <ProjectNew />
      <Contact />

    </div>
  )
}

export default LandingPage