
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const RocketIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <path
      d="M12 2L2 7v10l10 5 10-5V7L12 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M2 7l10 5 10-5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M12 22v-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3; // Duration of the progress animation in seconds
    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progressPercentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressPercentage);

      if (progressPercentage < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.pulsingContainer}>
        <motion.div
          style={styles.pulsingCircle}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={styles.icon}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <RocketIcon />
        </motion.div>
      </div>
      <motion.div
        style={styles.percentageText}
        animate={{ y: [0, -15, 0], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {Math.round(progress)}%
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#a9aba4', // Gradient background
    color: '#191a18', // White text for contrast
    overflow: 'hidden', // Ensure no scrollbars appear
  },
  pulsingContainer: {
    position: 'relative',
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulsingCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 100px rgba(255, 255, 255, 0.4)',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  percentageText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    marginTop: 20,
    color: '#191a18', 
    textShadow: '0 0 10px rgba(0,0,0,0.5)', 
  },
};

export default Preloader;
