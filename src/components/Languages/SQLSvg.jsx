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
      viewBox="0 0 214 214"
    >
    <g id="Group 4" stroke="#fff" strokeWidth="0.6">
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          d="M106 77.5c12.738 0 24.289-1.57 32.672-4.122 4.189-1.275 7.615-2.803 10.005-4.523 2.378-1.71 3.823-3.683 3.823-5.855 0-2.172-1.445-4.144-3.823-5.855-2.39-1.72-5.816-3.248-10.005-4.523C130.289 50.071 118.738 48.5 106 48.5c-12.738 0-24.29 1.57-32.672 4.122-4.19 1.275-7.615 2.803-10.005 4.523C60.945 58.855 59.5 60.828 59.5 63c0 2.172 1.445 4.144 3.823 5.855 2.39 1.72 5.816 3.248 10.005 4.523C81.71 75.929 93.261 77.5 106 77.5zM150.5 78l-12 7-7 2-7.5 1.5-8.5 1h-19L88 89l-7-1.5-6.5-2.5-7-3.5L61 78v17l6.5 3.5L76 102l8.5 2 8 1.5 7 .5H118l9-1.5 7.5-2 6.5-3 9.5-4.5V78z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          d="M150.836 104.035l-12 7-7 2-7.5 1.5-8.5 1h-19l-8.5-.5-7-1.5-6.5-2.5-7-3.5-6.5-3.5v17l6.5 3.5 8.5 3.5 8.5 2 8 1.5 7 .5h18.5l9-1.5 7.5-2 6.5-3 9.5-4.5v-17z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          d="M150.836 131.035l-12 7-7 2-7.5 1.5-8.5 1h-19l-8.5-.5-7-1.5-6.5-2.5-7-3.5-6.5-3.5v17l6.5 3.5 8.5 3.5 8.5 2 8 1.5 7 .5h18.5l9-1.5 7.5-2 6.5-3 9.5-4.5v-17z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          d="M161 58l-1-2.541-3.5-3.959L151 47l-6-3.5-6.5-2.5-9.5-2.5-9-1-8.5-.5h-9l-9 .5-7.5 1-8 2-7 2.5-6.5 3-5.5 3-5 3.5-4.354 4.147V78.5l.854 75L54 159l4 4 5.5 4.5L71 172l8 3 7.5 1.5 7 1H124l8.5-1 6.5-1.5 7-3 5.5-3 6-4.5 3-3.5 1.5-4-1-99z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
