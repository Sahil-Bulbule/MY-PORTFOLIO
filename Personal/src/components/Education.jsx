// components/Education.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    title: "YCCE Nagpur",
    subtitle: "B-TECh In Computer Technology",
    year: "2025 - Present",
    percentage: "In 3RD Sem :- 8.26 SGPA",
    description: "Currently pursuing a Bachelor’s degree in Computer Science and Engineering. Actively building projects and enhancing my development skills while exploring modern technologies."
  },
  {
    title: "Priyadarshini Polytechnic Nagpur",
    subtitle: "Diploma in Computer Engineering",
    year: "2022 - 2025",
    percentage: "86.23%",
    description: "Completed diploma with distinction, building a strong foundation in programming, data structures, and core software development concepts."
  },
  {
    title: "CSI School",
    subtitle: "Primary / Secondary School",
    year: "2018 - 2019",
    percentage: "SSC - 79.80%",
    description: "Completed secondary education with a focus on mathematics and science, developing analytical and problem-solving skills."
  }
];

const TimelineItem = ({ item, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className="relative pl-8 pb-12">
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-[11px] top-8 w-0.5 bg-gradient-to-b from-primary to-secondary"
        />
      )}

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-700 group"
      >
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
          <div className="absolute inset-0 rounded-xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
        </div>
        <h3 className="text-xl font-bold text-primary transition-all duration-200 group-hover:text-secondary group-hover:scale-110 origin-left">{item.title}</h3>
        <p className="text-gray-300 mt-1">{item.subtitle}</p>
        <div className="flex gap-4 mt-2 text-sm">
          <span className="text-secondary">{item.year}</span>
          {item.percentage && <span className="text-gray-400">Grade: {item.percentage}</span>}
        </div>
        <p className="text-gray-400 mt-3">{item.description}</p>
      </motion.div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;