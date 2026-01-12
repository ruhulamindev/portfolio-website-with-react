import React from 'react';
import HeroSection from '../Components/HeroSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <Skills />
    </div>
  );
};

export default Home;