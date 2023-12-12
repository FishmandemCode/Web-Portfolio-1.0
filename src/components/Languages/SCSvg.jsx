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
      viewBox="0 0 259 120"
    >
      <g id="Group 1" stroke="#ffffff">
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 1"
          d="M60 17.5l6.5 8.5-49 30.5 48 31.5-6 8.5L6 63V51l53.5-33.5"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 2"
          d="M199.494 94.906l-6.644-8.388 48.472-31.332-48.531-30.676 5.854-8.601 54.064 32.581.205 11.998-52.92 34.41"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 3"
          d="M78.657 68.637L104.5 49.001l1 5 3.5 3.5h6l11-8.5 1 3.5-3 3.5-6 5-39.342 31V68.637zm0 0h0"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 4"
          d="M79 91.5l45.503-35.295 1 5 3.5 3.5 5.997-1.5L147.003 54l.497 6.5-3 2.705-6 4.795-38 32.999L79 101v-9.5zm0 0l19.66-15.66"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 5"
          d="M101 100.363h37.437l7.509-6.904 7.786-9.52 1.02-3.82.413-2.383-.413-5.236L149 77l-5 4-5.258 2.003L134 79l-2-5.5"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 6"
          d="M104.662 48.631l12.838-11.63 6-4 6-1.501 2 2V38l-2 4.5-3 5-3 3-8 6.5"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 7"
          d="M125 54.277l12.838-11.63 6-4 6-1.501 2 2v4.5l-2 4.5-3 5-3 3-8 6.5"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 8"
          d="M144.838 62.646l6-4L153.5 58M152 74.277L154.5 72l2.338-3.854 2-4.5V61.5"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 9"
          d="M179.5.5H161L158 12l1.5 2.5 5 3 6.5 2h8.5V.5z"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 10"
          d="M172.479 20.143L168 34l-4 13.5-4.743-1.294L161.5 33l3.324-15"
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Line 11"
          d="M155.5 50.5l3.884-4.18L164 47.5l-.5 7-3 4.5-3.5 4-4.384 2H148l1.5-1 3.116-4L154 56l1.5-5.5z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
