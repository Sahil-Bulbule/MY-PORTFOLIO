import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Modern Frontend Development',
    description:
      'Building responsive and high-performance web interfaces using HTML, CSS, JavaScript, and React. I focus on clean design, smooth user experience, and writing maintainable code.',
    icon: '🎨',
  },
  {
    title: 'Modern Python Backend Development',
    description:
      'Working with Python for backend development and integrating APIs to create dynamic and connected web applications while improving my server-side skills.',
    icon: '⚙️',
  },
  {
    title: 'Real-World Project Development',
    description:
      'Developing practical web applications that solve real-world problems and help me gain hands-on experience through continuous learning and building.',
    icon: '🚀',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.18em] uppercase text-sm">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Services that make products
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> stand out</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{
                opacity: 0,
                x: index === 0 ? -60 : index === 2 ? 60 : 0,
                y: index === 1 ? 40 : 0
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: false }}
              className="relative group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
                <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent shadow-[0_0_20px_0_var(--tw-shadow-color)] shadow-[#7c3aed]/50" style={{ background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ff00a0, #d4af37) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 flex items-center justify-center text-primary font-bold tracking-wide transition-transform duration-200 group-hover:scale-125">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mt-5 text-primary transition-colors duration-200 group-hover:text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
