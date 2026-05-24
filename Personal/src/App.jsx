// App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedDivider from './components/AnimatedDivider';

import { motion } from 'framer-motion';

const SectionWrapper = ({ children, index }) => {
  return (
    <div
      style={{ scrollMarginTop: 96 }}
      className={`relative w-full overflow-hidden ${index === 0 ? 'pb-8 md:pb-12 pt-0' : 'py-8 md:py-12'}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function App() {
  // No sidebar state — sidebars removed

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Services key="services" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden relative portfolio-root">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/5 rounded-full filter blur-[120px] opacity-10 animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-accent/5 rounded-full filter blur-[120px] opacity-10 animation-delay-4000"></div>
      </div>

      <Navbar />
      <main className="pt-[76px]">
        {sections.map((SectionComponent, index) => (
          <React.Fragment key={`section-wrapper-${index}`}>
            <SectionWrapper index={index}>
              {SectionComponent}
            </SectionWrapper>
            {index < sections.length - 1 && <AnimatedDivider />}
          </React.Fragment>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;