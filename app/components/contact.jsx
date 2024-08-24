'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

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
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-teal-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-green-400 text-center"
              >
                Thank you for your message! I&apos;ll get back to you soon.
              </motion.p>
            )}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Connect With Me</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out through any of these platforms. I&apos;m always excited to connect with fellow developers, potential clients, or anyone interested in tech!
            </p>
            <div className="space-y-4">
              <SocialLink icon={FaGithub} label="GitHub" url="https://github.com/ObayM" />
              <SocialLink icon={FaLinkedin} label="LinkedIn" url="https://linkedin.com/in/obay-dev" />
              <SocialLink icon={FaFacebook} label="Facebook" url="https://facebook.com/obay.dev" />
              <SocialLink icon={FaInstagram} label="Instagram" url="https://instagram.com/obay.dev" />
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

const SocialLink = ({ icon: Icon, label, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300"
    whileHover={{ scale: 1.05, x: 10 }}
  >
    <Icon className="text-2xl" />
    <span>{label}</span>
  </motion.a>
);


export default ContactPage;