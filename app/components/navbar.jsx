
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (route) => pathname === route;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 text-white"
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight hover:text-teal-400 transition duration-300">
          <motion.span whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <span>Obay</span>
            <span className="text-teal-400">Rashad</span>
          </motion.span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} isActive={isActive(item.href)} />
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <MobileNavItem key={item.name} {...item} isActive={isActive(item.href)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavItem = ({ name, href, isActive }) => (
  <Link href={href} className="relative group">
    <motion.div
      whileHover={{ y: -2 }}
      className={`text-lg font-medium transition duration-300 ${
        isActive ? 'text-teal-400' : 'text-white hover:text-teal-400'
      }`}
      >
      {name}
    </motion.div>
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400"
      initial={false}
      animate={{ scale: isActive ? 1 : 0 }}
      whileHover={{ scale: 1 }}
    />
  </Link>
);

const MobileNavItem = ({ name, href, isActive }) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isActive
        ? 'bg-gray-700 text-teal-400'
        : 'text-gray-300 hover:bg-gray-700 hover:text-teal-400'
    }`}
  >
    {name}
  </Link>
);

export default Navbar;