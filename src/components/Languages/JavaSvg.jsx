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
      viewBox="0 0 161 237"
    >
      <g id="Group 1" stroke="#fff" strokeWidth="1">
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 1"
          d="M101.002 1.504l3 4.5 1.499 10.5-1.5 6.5-2 5.5-2.5 4.5-2.5 4-4.5 5.5-5.5 5.5-4.5 4.5-4.5 3.5-5.5 4.5-5 5-2.5 3.5-2 4.5-.5 5 .5 5.5 2 6 3 6 10 16.5-15-14.5-4.5-5.5-4-6.5-2-5.5-.5-5.5.5-5 2-4.5 4-5 5-5 5.5-4 5.5-5 5.5-4 5.5-4.5 4-3.5 3.5-4 3.5-4.5 2.5-4.5 1.431-3.5.569-4 .5-5-.499-7.5zm0 0L101 1.501"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 2"
          d="M119 43.998l6.137-1.52L117 47l-4 3-5.5 3.498-4.5 3.5L98 61l-3.5 4-2.5 4.5-1 5.5 1 5 4.5 5.5 4 5.5 2.5 7-1 6.5-3 6-4.5 4.5-6.5 4.5 4-7.5 1-4.999-2-4.501-2-3.5-4-5-3-4.501-2-5.5-.5-5.5.5-5.501 2.5-5 2.5-4 4-4 2.5-2.498 6-4.002 4.5-2.5 5.5-2.5 5.5-2.5 6-2z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 3"
          d="M131 113l-2.158 1.525H135l4.5.975 5 3.5 2.5 4.5.5 5.5-2 4-3 4.5-5 5.5-6 4-8 4.5 7.5-2 4.5-2 5.5-3 6-3.5 4-4.5 2-3 1.5-3 .5-5-.5-3-1-2.5-2-2.5-1.5-1.5-2-1.475-2.5-1.525-6-1h-5l-3.5 1z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 4"
          d="M46 116l7.13-2-9.13 1-7.5 1.509-8 2.491-6 3-3.5 2.5 1.5 2.505L29 129.5l8.5 1.501 10.5 1h18.5l9.5-.5 9-.5 6.5-.5 8.5-1 14-3.499 7-4.502-8.5 1.502-9.5 1.499-10.5 1.001-10.5.5-8.5.502-12.5.501-12-.5-6.5-.498-5.5-1-3.5-2 1.5-2.499 5-2.309L46 116z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 5"
          d="M109.998 145.498l-3.5-2.5-6 2.003-8 .999-8 1-24.998-.499L51 146l-6-1.5-1.5-2.5 1.5-4-5.5 3.5-4 3.501 1 1.5 4 3 6.998 2.497 7 1 10 .5h12l8-.5 8-.5 8-1 7.001-1.5 5.999-2.5-3.5-2z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 6"
          d="M104.499 167.501L100 163.568l-4.5 1.932L90 167l-5.5.501H63L56.5 167l-6-1.5-1.5-1.931L50 161l-2 .5-4.5 2.5-1.5 4 3.5 2.5 5.5 3.001 6.5 2.001 8.5.998 21.5-.412 4.999-.587 9.5-2 8-3.5-5.5-2.5z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 7"
          d="M22 178.503l11.18-2.966H26.5l-5.5.963-7 2.003-6.5 2.997-5.5 4v3.5l7 3 12 2 14.5 1.502 17.5 1.5h15l17.5-.5 18-1 14.5-2.5 10-1.5 8.5-2.999 4.5-2 3.5-2.5 1-2.001-.5-1.999-2.5-2.5v4.499l-4.5 2.5-9.5 3.5-15 2.001-15.5 1.499H56.5l-18.5-1.5-16-2-8-3.5 1-2.5 7-3.499z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 8"
          d="M45.5 202.5l-13-1.502 4 2L42 205.5l8.5 1.5 10 1 14.5.5h13l12.5-.5 10.5-1 10-2 8.5-2 8-2.002L145 198l4.5-3 4.5-6.501-10.5 6L132 198l-12.5 3-19.5 2-18 .498H54l-8.5-.998z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
