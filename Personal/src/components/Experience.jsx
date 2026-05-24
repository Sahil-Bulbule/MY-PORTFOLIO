import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Advanced Infotech Pvt Ltd',
    duration: '2023 (June - July)',
    points: [
      '1] Assisted in developing responsive UI components using HTML, CSS, and JavaScript.',
      '2] Learned to work with React and understand component-based development.',
      '3] Supported API integration tasks and basic bug fixing under guidance.',
      '4] Gained hands-on experience working in a real development environment.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-semibold tracking-[0.18em] uppercase text-sm">Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Internship <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Timeline</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: false }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 group"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
                <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-primary transition-all duration-200 group-hover:text-secondary group-hover:scale-110 origin-left">{exp.role}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-300 mt-1">{exp.company}</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
