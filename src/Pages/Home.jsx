import React from 'react';
import HeroSection from '../Components/HeroSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <HeroSection id="hero" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
      <Skills id="skills" />
    </div>
  );
};

export default Home;