import React from 'react';
import { motion } from 'framer-motion';

const learningData = [
  {
    title: 'Python Backend',
    color: 'text-primary',
    borderGlow: 'hover:border-primary/40',
    badges: [
      { label: 'Flask', level: 'Completed', theory: 'Built robust REST APIs, handling routing, session management, and backend architecture.' },
      { label: 'Django', level: 'Learning', theory: 'Diving into scalable frameworks, powerful ORMs, and secure backend patterns.' },
      { label: 'MongoDB', level: 'Basics', theory: 'Understanding NoSQL databases, flexible document structures, and Python integration.' }
    ]
  },
  {
    title: 'AI & ML Basics',
    color: 'text-secondary',
    borderGlow: 'hover:border-secondary/40',
    badges: [
      { label: 'Machine Learning', level: 'Exploring', theory: 'Understanding fundamental AI concepts, regression, classification models, and data preprocessing techniques using core Python libraries.' }
    ]
  },
  {
    title: 'DSA with C++',
    color: 'text-[#00f0ff]', // Cyan color matching theme
    borderGlow: 'hover:border-[#00f0ff]/40',
    badges: [
      { label: 'Data Structures', level: 'Pursuing', theory: 'Mastering algorithmic problem solving, time-space complexity optimization, and implementing core structures like trees, graphs, and dynamic programming in C++.' }
    ]
  }
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm">Continuous Growth</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Currently What I <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Learn</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: false }}
              className={`relative group rounded-2xl p-6 border border-white/5 bg-white/[0.03] transition-all duration-200 flex flex-col h-full z-10 shadow-[0_4px_20px_rgba(0,0,0,0.8)]`}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
                <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              </div>
              <h3 className="relative z-10 text-2xl font-bold mb-6 text-primary transition-all duration-200 group-hover:text-secondary group-hover:scale-110 origin-left">{item.title}</h3>

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                {item.badges.map((badge, idx) => (
                  <div key={idx} className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-200">{badge.label}</span>
                      <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
                        {badge.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {badge.theory}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
