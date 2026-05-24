// components/About.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutRow = ({ imageLeft, imageSrc, title, text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const content = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex-1 group"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary transition-all duration-200 group-hover:text-secondary group-hover:scale-105 origin-left">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-lg">{text}</p>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageLeft ? -60 : 60 }}
      transition={{ duration: 0.8, delay: delay + 0.1 }}
      className="flex-1 group/img w-full"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] md:aspect-auto md:h-[300px]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/img:opacity-100 transition-all duration-200 pointer-events-none z-10 border-[3px] border-primary" />
        
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; }}
        />
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center gap-10 mb-20">
      {imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
};

const About = () => {
  const aboutContent = [
    {
      imageLeft: false,
      imageSrc: "/Btech .png", // Ensure file name is 'btech.png' (no space)
      title: 'B.Tech Student & Developer',
      text: 'I am a B.Tech student with a strong interest in web development and building real-world applications. I enjoy turning ideas into functional products by combining clean design with practical development skills. My goal is to create solutions that are simple, efficient, and user-friendly.'
    },
    {
      imageLeft: true,
      imageSrc: '/Exploring .png',
      title: 'Exploring AI & Machine Learning',
      text: 'I have a growing interest in Artificial Intelligence and Machine Learning, and I am currently exploring its core concepts and real-world applications. I am learning how data-driven models work and how intelligent systems can be built to solve practical problems.'
    },
    {
      imageLeft: false,
      imageSrc: '/Continuos.png',
      title: 'Continuous Learner & Problem Solver',
      text: 'I am a continuous learner who actively keeps up with evolving technologies and industry trends. With a problem-solving mindset, I enjoy tackling challenges and transforming ideas into functional, real-world solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/40">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Who I am and how I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> build value</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {aboutContent.map((item, index) => (
          <AboutRow key={index} {...item} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default About;