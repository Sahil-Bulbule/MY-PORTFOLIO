// components/Projects.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projectsData = [
  {
    title: '📝 To-Do List Project 📝',
    description: 'A modern, responsive, and user-friendly Todo List web application built using HTML, CSS, and JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Sahil-Bulbule/TODO_LIST_PROJECT',
    image: '/TO DO LIST.png',
    live: '#'
  },
  {
    title: '📚 Study Planner ( Focus Flow ) 📚',
    description: 'Focused on creating a smooth and intuitive task management flow, allowing users to easily add, manage, and track daily tasks with a clean and user-friendly interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Sahil-Bulbule/STUDY-PLANNER-WEB',
    live: '#',
    image: "Focus.png"
  },
  {
    title: '🚗 Car Recommendation Web 🚗',
    description: 'The Car Recommendation Web App is a web-based application designed to suggest suitable cars based on user-defined criteria such as budget and category. It dynamically filters and displays relevant options to improve user decision-making.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Sahil-Bulbule/CAR-RECOMMENDATION-WEB-APP',
    live: '#',
    image: 'Car.png'
  },
  {
    title: '💸 Expense Tracker 💸',
    description: 'A web application to track daily expenses and manage personal finances. Users can add, delete, and monitor their spending with a clean and responsive interface.',
    tech: ['React', 'Tailwind-CSS', 'Firebase'],
    github: 'https://github.com/Sahil-Bulbule/Expense---Tracker',
    live: '#',
    image: 'Expense.png'
  },
  {
    title: '⚡My Personal Portfolio ⚡',
    description: 'A personal portfolio website showcasing my projects, skills, and internship experience. Built to highlight my work and growth as a developer.',
    tech: ['React', 'Tailwind-CSS'],
    github: 'https://github.com/sahil/social-analytics',
    live: '#',
    image: 'Portfolio.png.png'
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, type: "spring", stiffness: 100 }}
      className="relative group bg-transparent rounded-2xl overflow-hidden border border-white/5 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-10"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
        <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
      </div>
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90" />
      </div>

      <div className="relative p-6 bg-transparent">
        <h3 className="text-[1.1rem] leading-tight font-bold text-primary mb-3 transition-colors duration-200 group-hover:text-secondary" title={project.title}>
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3 transition-colors duration-200">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 text-primary border border-primary/20 backdrop-blur-sm shadow-[0_0_10px_rgba(212,175,55,0.1)] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transform hover:-translate-y-1 transition-all duration-200"
          >
            <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm mb-3">Portfolio Highlights</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;