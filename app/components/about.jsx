'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMePage = () => {
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
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-16"
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-300">
              I&apos;m a passionate full-stack developer with a keen eye for design and a love for creating
              seamless user experiences. With years of experience in web and mobile development,
              I bring ideas to life through code and creativity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>JavaScript (React, Node.js, Vue.js)</li>
              <li>Python (Django, Flask)</li>
              <li>HTML5 & CSS3 (Sass, Tailwind CSS)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>DevOps & Cloud Services (AWS, Docker)</li>
              <li>Mobile Development (React Native)</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-12 bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
          <Timeline />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-12 bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">My Interests</h2>
          <p className="text-gray-300">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing my knowledge through tech blogs and community meetups. I&apos;m also an avid traveler and a
            photography enthusiast, always seeking inspiration from the world around me.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-teal-600"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const events = [
    { year: '2018', event: 'Started my journey in web development' },
    { year: '2019', event: 'Landed my first job as a junior developer' },
    { year: '2020', event: 'Contributed to major open-source projects' },
    { year: '2021', event: 'Led development of a successful mobile app' },
    { year: '2022', event: 'Became a senior full-stack developer' },
  ];

  return (
    <div className="relative">
      {events.map((item, index) => (
        <motion.div
          key={index}
          className="mb-8 flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex-shrink-0 w-24 text-right pr-4">
            <span className="text-teal-400 font-semibold">{item.year}</span>
          </div>
          <div className="flex-grow pl-4 border-l-2 border-teal-400">
            <p className="text-gray-300">{item.event}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};



export default AboutMePage;