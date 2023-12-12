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
      <g id="Group 1" stroke="#fff" strokeWidth="1">
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
          d="M82 19H20l1.5 13.5h48l-2 17.5-31 .5v12h30l-1.5 18L50 84l-13.5-3.5V74l-12-1.5 1 16.5L50 95.5 76.5 89 82 19z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;