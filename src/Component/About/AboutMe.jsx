import React from "react";
import { motion, useAnimation } from "framer-motion";
import Star from "../../assets/star.jpeg";
import Pic from '../../assets/file.jpeg'

const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const hoverEffects = {
  hover: {
    scale: 1.1,
    rotate: 5,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
};

function AboutMe() {
  const controls = useAnimation();

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen bg-white"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div
        className="relative flex flex-col items-center justify-between w-full max-w-6xl mx-auto md:flex-row"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-start justify-center w-full mb-8 space-y-4 md:w-1/3 md:mb-0"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-wide text-gray-800"
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
          >
            Skills
          </motion.h2>
          <ul className="mt-90">
            <motion.li className="text-lg font-medium text-gray-700" variants={textRevealVariants}>
              Front-End: React, Tailwind CSS, GSAP, Framer Motion
            </motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={textRevealVariants}>
              Back-End: Node.js, Express, MongoDB, Spring Boot
            </motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={textRevealVariants}>
              Tools: Git, Webpack, GitHub
            </motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={textRevealVariants}>
              Other: Responsive Design, Accessibility
            </motion.li>
          </ul>
          <motion.div
            className="transition-transform duration-500 ease-in-out transform-gpu"
            whileHover="hover"
            variants={hoverEffects}
          >
            <img
              className="w-40 h-40 shadow-lg left-20 rounded-3xl"
              src={Pic}
              alt="My Pic"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative flex flex-col items-center justify-center w-full space-y-8 md:w-2/3"
          variants={itemVariants}
        >
          <motion.div
            className="transition-transform duration-500 ease-in-out transform-gpu"
            //whileHover="hover"
            // variants={hoverEffects}
          >
            <img
              className="w-40 h-40 mt-20 rounded-lg shadow-lg"
              src={Star}
              alt="Additional Pic"
            />
          </motion.div>
          <motion.div className="w-full pl-0 mt-8 md:pl-48 md:mt-0" variants={itemVariants}>
            <motion.h2
              className="font-['Regular'] text-4xl tracking-wide font-bold text-gray-800"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              About Me
            </motion.h2>
            <motion.p
              className="font-['Regular'] tracking-wide leading-7 font-medium text-black mt-4"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              Hello! I'm Yash Kamar Gupta, a passionate Full Stack Developer with a
              knack for creating seamless and engaging web experiences. With a strong
              foundation in both front-end and back-end technologies, I enjoy
              transforming complex problems into intuitive and user-friendly
              solutions.
            </motion.p>
            <motion.p
              className="font-['Regular'] tracking-wide leading-7 font-medium text-black mt-4"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              In my spare time, I love experimenting with new technologies, contributing to open-source projects, and enhancing my skills. I'm always eager to tackle new challenges and collaborate with talented individuals to build innovative solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
