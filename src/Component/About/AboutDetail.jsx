import React from "react";
import { motion } from "framer-motion";
import Star from "../../assets/star.jpeg";

const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function AboutDetail() {
  return (
    <motion.div
      className="w-full h-screen bg-[#f1f1f1] flex flex-col items-center justify-center"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div
        className="relative flex flex-row items-center justify-between w-full max-w-6xl mx-auto"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-start justify-center w-1/3 h-auto space-y-4"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-wide text-gray-800"
            variants={itemVariants}
          >
            Skills
          </motion.h2>
          <ul className="space-y-2">
            <motion.li className="text-lg font-medium text-gray-700" variants={itemVariants}>Front-End: React, Tailwind CSS, GSAP, Framer Motion</motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={itemVariants}>Back-End: Node.js, Express, MongoDB, Spring Boot</motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={itemVariants}>Tools: Git, Webpack, GitHub</motion.li>
            <motion.li className="text-lg font-medium text-gray-700" variants={itemVariants}>Other: Responsive Design, Accessibility</motion.li>
          </ul>
        </motion.div>
        <motion.div
          className="relative flex flex-col items-start justify-center w-2/3 h-full space-y-8"
          variants={containerVariants}
        >
          <motion.div
            className="relative transition-transform duration-500 ease-in-out transform-gpu"
            variants={itemVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <motion.img
              className="relative rounded-full shadow-lg w-52 h-52 top-7"
              src={Star}
              alt="Star"
              variants={imageVariants}
            />
          </motion.div>
          <motion.div className="w-full pl-48 mt-60" variants={itemVariants}>
            <motion.h2
              className="font-['Regular'] text-4xl tracking-wide font-bold text-gray-800"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="font-['Regular'] tracking-wide leading-7 font-medium text-gray-700 mt-4"
              variants={itemVariants}
            >
              Hello! I'm Yash Kamar Gupta, a passionate Full Stack Developer with a
              knack for creating seamless and engaging web experiences. With a strong
              foundation in both front-end and back-end technologies, I enjoy
              transforming complex problems into intuitive and user-friendly
              solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutDetail;
