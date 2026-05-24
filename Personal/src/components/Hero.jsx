// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

const Hero = () => {

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sahil_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      style={{ willChange: "transform" }}
      className="flex items-center relative overflow-hidden lg:min-h-screen"
    >

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left relative group w-full lg:pl-8 xl:pl-16"
          >

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="relative flex h-3 w-3 mb-5">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>

              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wide ring-1 ring-primary/20">
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-[1.1] tracking-tight text-white drop-shadow-lg"
            >
              HELLO ,
              <span className="wave-emoji text-2xl mx-1 z-10 relative">
                👋
              </span>

              <br className="hidden sm:block" />

              <span className="relative inline-block mt-2">
                <span className="relative bg-gradient-to-r from-primary via-[#e6cf80] to-secondary bg-clip-text text-transparent font-black block">
                  I am <span className="text-primary font-bold">SAHIL</span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-light p-2 rounded-lg"
            >
              I am a passionate <span className="text-primary font-bold">Frontend Developer</span> and <span className="text-secondary font-bold">Python Backend Developer</span>, dedicated to creating seamless, high-performance web applications. I specialize in crafting intuitive <span className="text-accent font-bold">user interfaces</span> and <span className="text-primary font-bold">writing clean, maintainable backend code</span>. With a keen interest in <span className="text-secondary font-bold">AI and Machine Learning</span>, I am focused on expanding my expertise to build intelligent, data-driven solutions in the future.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </button>

              <a
                href="#contact"
                className="px-6 py-3 border border-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 text-center hover:scale-105"
              >
                Contact Me
              </a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="flex flex-row gap-4 justify-center lg:justify-start mt-5"
            >

              <a
                href="https://www.linkedin.com/in/Sahil Bulbule/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/40 text-[#0077B5] font-bold hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,119,181,0.2)] hover:shadow-[0_0_25px_rgba(0,119,181,0.6)] hover:-translate-y-1 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>

                LinkedIn
              </a>

              <a
                href="https://github.com/Sahil-Bulbule"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>

                GitHub
              </a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mt-10 text-left"
            >

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xl font-bold text-primary">10+</p>
                <p className="text-gray-400 text-sm">Projects Built</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xl font-bold text-secondary">1+</p>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xl font-bold text-primary">100%</p>
                <p className="text-gray-400 text-sm">Focus</p>
              </div>

            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 lg:ml-8 xl:ml-16 w-full flex justify-center lg:justify-end"
          >
            <ImageSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;