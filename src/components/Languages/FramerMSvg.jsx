import React from "react";
import { motion } from "framer-motion"

function Icon({ isTextHovered }) {
  const animationVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 4377 2514"
    >
      <g id="Group 4" stroke="#fff" strokeWidth="15">
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        d="M1251.68 2506.99V3.641L2500.32 1253.99l-1248.64 1253z"
      ></motion.path>
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        d="M3753.32 6.994L2502.97 1253.64l-626.15 620.85 626.15 620.5 1250.35-1241.35V6.993z"
      ></motion.path>
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        d="M3751.82 2509.99v-1255l-622 625.5 622 629.5z"
      ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
