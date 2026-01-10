import React from 'react';
import HeroSection from '../Components/HeroSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Projects />
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;