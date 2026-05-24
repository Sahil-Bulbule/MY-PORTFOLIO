// components/Skills.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillsData = [
  { name: 'C++', icon: '💻', level: 85, description: 'Applies OOP, DSA, and performance-focused programming fundamentals.' },
  { name: 'Python', icon: '🐍', level: 98, description: 'Writes efficient backend logic, automation scripts, and API-ready code.' },
  { name: 'JavaScript', icon: '🟨', level: 97, description: 'Adds dynamic behavior, interactivity, and reusable logic for web applications.' },
  { name: 'HTML', icon: '🌐', level: 98, description: 'Builds semantic, SEO-friendly page structures with clean and accessible markup.' },
  { name: 'CSS', icon: '🎨', level: 97, description: 'Creates responsive, modern layouts with animations and strong visual hierarchy.' },
  { name: 'Tailwind CSS', icon: '💨', level: 96, description: 'Builds fast and consistent UI with utility-first classes and responsive design tokens.' },
  { name: 'React.js', icon: '⚛️', level: 97, description: 'Develops component-based user interfaces with hooks and scalable architecture.' },
  { name: 'Flask', icon: '🧪', level: 96, description: 'Builds lightweight APIs and backend services with fast development workflows.' },
  { name: 'Django', icon: '🚀', level: 75, description: 'Creates full-featured web backends with ORM, auth, and admin integrations.' },
  { name: 'SQL', icon: '🗄️', level: 77, description: 'Designs relational schemas and writes optimized queries for reliable data access.' },
  { name: 'MongoDB', icon: '🍃', level: 55, description: 'Manages NoSQL collections and flexible document-based data modeling.' },
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });
  const floatDuration = 3.8 + (index % 4) * 0.45;
  const tilt = index % 2 === 0 ? 1.15 : -1.15;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={
        isInView
          ? {
            opacity: 1,
            x: 0,
          }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      viewport={{ once: false }}
      transition={{
        opacity: { duration: 0.6, delay: (index % 4) * 0.1 },
        x: { duration: 0.6, delay: (index % 4) * 0.1 },
      }}
      className="relative group bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-white/5 transition-all duration-200 z-10 shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
        <div className="absolute inset-0 rounded-xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
      </div>
      <div className="relative z-10 flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg border border-primary/35 bg-primary/10 flex items-center justify-center text-base transition-transform duration-200 group-hover:scale-125">
            {skill.icon}
          </span>
          <h3 className="text-xl font-bold text-primary transition-colors duration-200 group-hover:text-secondary">{skill.name}</h3>
        </div>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-700 overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.9, delay: index * 0.08 }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm mb-3">Toolbox</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;