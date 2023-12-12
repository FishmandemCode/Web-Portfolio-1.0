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
      viewBox="0 0 103 116"
    >
      <g id="Group 1" stroke="#fff">
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 1"
          d="M101.5 1.5H2.005L9.5 105 51 115l41-10 9.5-103.5z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}        
          id="Line 2"
          d="M47.5 19.5H33.995v65L20 78v16.5l27.5 6.5V19.5z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 3"
          d="M88 20.5H58.5l-2 47.5 14-3L68 85.5 56.5 89v12L80 95.5 84 52H70.5V33H86l2-12.5z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
