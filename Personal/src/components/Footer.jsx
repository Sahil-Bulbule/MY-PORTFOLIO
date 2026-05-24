// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
    ],
    resources: [
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sahil-Bulbule',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1-.02-1.95-3.09.67-3.795-1.33-3.795-1.33-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.69-1.48-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.14a10.85 10.85 0 012.84-.38c.96.01 1.92.13 2.84.38 2.16-1.44 3.11-1.14 3.11-1.14.62 1.52.24 2.64.12 2.92.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.23-5.09 5.51.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.06 0 .3.2.65.78.54C19.06 20.85 22.25 16.68 22.25 11.76 22.25 5.48 17.27.5 12 .5z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Sahil Bulbule/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-gray-300 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ transformOrigin: 'center' }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">🚀</span>
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SAHIL
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Frontend & Python Backend Developer crafting clean, modern, and high-performance web experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -3,
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                  }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Get In Touch</h3>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Let&apos;s work together to create something amazing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-black font-bold text-sm hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Let&apos;s Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 mt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} <span className="text-primary">Sahil</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
              Crafted with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              using React & Tailwind
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
