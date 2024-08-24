'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'SportsEra',
    description: 'An app for sports',
    image: '/images/project1.jpg',
    tags: ['React', 'Firebase', 'NextJs'],
    link: 'https://project1.com',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'An app for sports',
    image: '/images/project2.jpg',
    tags: ['React', 'Firebase', 'NextJs'],
    link: 'https://project2.com',
  },
  {
    id: 3,
    title: 'Pantry Tracker',
    description: 'An app for sports',
    image: '/images/project3.jpg',
    tags: ['React', 'Firebase', 'NextJs'],
    link: 'https://project3.com',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-center mb-16"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      onClick={() => setSelectedProject(project)}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <motion.img
        layoutId={`project-image-${project.id}`}
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <motion.div className="p-6">
        <motion.h3
          layoutId={`project-title-${project.id}`}
          className="text-2xl font-bold mb-2"
        >

          {project.title}
        </motion.h3>
        <motion.p
          layoutId={`project-description-${project.id}`}
          className="text-gray-300 mb-4"
        >
          {project.description}
        </motion.p>
        <motion.div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal-500 text-white text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-container-${project.id}`}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <motion.div className="p-8">
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-3xl font-bold mb-4"
          >
            {project.title}
          </motion.h3>
          <motion.p
            layoutId={`project-description-${project.id}`}
            className="text-gray-300 mb-6"
          >
            {project.description}
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-teal-500 text-white text-sm px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-teal-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        </motion.div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;