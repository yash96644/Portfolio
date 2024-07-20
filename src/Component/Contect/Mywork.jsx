import React from 'react';
import { motion } from 'framer-motion';
import Youtube from '../../assets/youtube.png';
import amazon from '../../assets/amazon.png';
import resume from '../../assets/resume.png';

const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,  // Reduced duration for faster animation
      ease: 'easeInOut',
      when: "beforeChildren",
      staggerChildren: 0.2,  // Reduced stagger for faster sequential animation
    },
  },
};

const headerVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,  // Reduced duration for faster animation
      ease: 'easeInOut',
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,  // Reduced duration for faster animation
      ease: 'easeInOut',
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,  // Reduced duration for faster animation
      ease: 'easeInOut',
    },
  },
};

function MyWork() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen bg-[#f1f1f1]"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mt-80"
        variants={headerVariants}
      >
        My Work
      </motion.h1>
      <motion.ul
        className="w-11/12 py-10 list-none md:w-2/3 lg:w-1/2"
        variants={containerVariants}
      >
        <motion.li
          className="flex items-center p-6 mb-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          variants={itemVariants}
        >
          <div className="p-4 bg-gray-200 rounded-full">
            <img src={amazon} className="w-12 h-12 text-orange-500 transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-gray-800">Project 1</h2>
            <p className="text-gray-600">Amazon Clone</p>
            <a
              href="https://github.com/yash96644/amazon-clone-"
              className="text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        </motion.li>
        <motion.li
          className="flex items-center p-6 mb-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          variants={itemVariants}
        >
          <div className="p-4 bg-gray-200 rounded-full">
            <img src={Youtube} className="w-12 h-12 text-orange-500 transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-gray-800">Project 2</h2>
            <p className="text-gray-600">YouTube-Clone</p>
            <a
              href="https://github.com/yash96644/yt-clone"
              className="text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        </motion.li>
        <motion.li
          className="flex items-center p-6 mb-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
          variants={itemVariants}
        >
          <div className="p-4 bg-gray-200 rounded-full">
            <img src={resume} className="w-12 h-12 text-orange-500 transition-transform duration-300 hover:scale-110" />
          </div>
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-gray-800">Project 3</h2>
            <p className="text-gray-600">Portfolio</p>
            <a
              href="https://github.com/yash96644/Portfolio"
              className="text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        </motion.li>
      </motion.ul>
      <motion.a
        href="https://github.com/yash96644"
        className="px-6 py-3 font-bold text-white transition-colors duration-300 bg-orange-500 rounded-full hover:bg-orange-700"
        variants={buttonVariants}
      >
        View More Projects
      </motion.a>
    </motion.div>
  );
}

export default MyWork;
