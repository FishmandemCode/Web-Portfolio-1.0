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
          d="M26.878 73.744L28.09 90.5 51 96l24-5.5 2.5-37h-39l-2.5-20h45V21.994l-58.5.001L26.878 66H64v14.5l-13 2.5-10.5-3.5v-5.755H26.878z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
