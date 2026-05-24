// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Services', href: '#services', icon: '🛠️' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '💻' },
    { name: 'Learning', href: '#learning', icon: '📚' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item =>
        item.href.substring(1)
      );

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {

        const element = document.getElementById(section);

        if (element) {

          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#090b14]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#090b14]/70 backdrop-blur-lg'
        }`}
      >

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">

          <div className="flex items-center justify-between h-[76px]">

            <motion.a
              href="#home"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🚀</span>

              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black text-xl tracking-tight">
                SAHIL
              </span>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">

              {navItems.map((item, index) => {

                const isActive =
                  activeSection === item.href.substring(1);

                return (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05 + 0.3,
                      duration: 0.4,
                    }}
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 mx-1 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base">
                      {item.icon}
                    </span>

                    <span className="hidden xl:inline">
                      {item.name}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-primary/30 bg-primary/5 -z-10"
                      />
                    )}
                  </motion.a>
                );
              })}

            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 text-white focus:outline-none group"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >

                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}

              </motion.div>
            </button>

          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.5 }}
        />

      </motion.nav>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-[76px] left-4 right-4 z-[90] lg:hidden overflow-hidden bg-[#090b14]/95 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl origin-top"
          >

            <div className="py-6 px-4 flex flex-col gap-2">

              {navItems.map((item, i) => (

                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.05,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  whileHover={{ x: 8 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 py-3 px-5 rounded-2xl transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/10 text-primary border border-primary/20'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span className="font-semibold">
                    {item.name}
                  </span>

                </motion.a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;