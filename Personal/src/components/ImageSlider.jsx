// components/ImageSlider.js
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/IMG 1.png',
  '/IMG 2.png',
  '/IMG 3.png',
  '/IMG 4.png',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto z-10">

      <div className="relative flex items-center justify-center overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="
              w-full
              h-full
              object-contain
              drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]
              select-none
              pointer-events-none
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1.08,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            draggable="false"
          />
        </AnimatePresence>

      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-yellow-500'
                : 'w-2 bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageSlider;