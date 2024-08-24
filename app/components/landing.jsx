
'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <Background /> */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-center mb-8"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-2xl"
        >
          I'm a passionate developer creating innovative solutions and beautiful user experiences.
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <AnimatedButton href="#projects">View Projects</AnimatedButton>
          <AnimatedButton href="#contact" variant="outline">Contact Me</AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedButton = ({ children, href, variant = 'solid' }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
      variant === 'solid'
        ? 'bg-teal-500 text-white hover:bg-teal-600'
        : 'border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
    }`}
  >
    {children}
  </motion.a>
);



export default LandingPage;
