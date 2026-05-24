import React from 'react';
import { motion } from 'framer-motion';

const AnimatedDivider = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.4, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[1px] w-2/5 md:w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
      />
    </div>
  );
};

export default AnimatedDivider;
