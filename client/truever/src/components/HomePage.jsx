import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Services from './Services'

function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <Services />
      <About/>
      <Gallery />
      <Contact />
    </div>
  );
}

export default HomePage;
