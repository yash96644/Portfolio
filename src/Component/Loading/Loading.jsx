import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          setLoading(false);
          clearInterval(interval);
          return 100;
        }
      });
    }, 30); // Adjust interval for desired animation speed (in milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // GSAP animation example (you can adjust this to your liking)
    gsap.to(".loader", {
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center",
    });
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#f1f1f1] transition-opacity ${loading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-32 h-32">
        <motion.div
          className="w-32 h-32 border-8 border-t-8 border-[#7e972a] rounded-full loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-3xl font-bold text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Loader;
