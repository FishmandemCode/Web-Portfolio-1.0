import React from "react";
import { motion } from "framer-motion"

function Icon({ isTextHovered }) {
  const animationVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 2574 2495'
    >
      <g id='Group 1' stroke='#ffffff' strokeWidth='7'>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id='Outer'
          d='M1166 310.003L490.749 701.57 461 720.5 436.5 754 417 805.5l-3.5 44.502V1630l3.5 57 10 34.5 19 33 20.5 23.5 28 19.5L1160 2183l67.5 34.5 36 10.5h33l36-7.5 38-15.5 704.5-404.5 31.5-23 22.5-26 18-33.5 10.5-39V821.003l-7.5-33.5-13.5-32-21.5-30.5-34-26.5-711.5-409.5-40-18-44.5-5-35 5-35.5 10.501-48.5 28.499z'
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id='C'
          d='M707.586 1192.72L717 1132l21-85 32-69.002 44.5-75.5 66-71 63.5-54 78.5-48 79-33.5 93-22.499 94.5-7.001 88.5 7 69.5 15.5 80.5 30.5 67 37.5 62 44 57 57 41 48.5 30.5 50L1534.5 1103l-46-59-34.5-29.5-47-30.502-53-19-49.5-6.5H1259l-26 5-36 8.5-40 15-30.5 18.502-34.5 25.5-31 32.5-20.5 29.5-22 41.5-13.5 38-7.5 51v47l10 56.5 23 56.5 27.5 41.5 38 40.5 34.5 24.5 34 20 47.5 15.5 27 6.5 47.5 4 46-4 46.5-11 45.5-21 35.5-23.5 32.5-28.5 24.5-29.5 20.5-31L1789 1534l-15.5 24.5-18 28.5-20 25-21 24-19 21-26 25.5-27.5 21.5-31.5 24-31.5 19.5-28 15-37 17.5-40.5 15.5-42.5 12.5-52 10.5-51.25 6.75-41.25 2.25-62.5-2.25-46-6.75-52-14-64-24.5-33-14-35-18.5-36.5-24-22-14-22.5-18-27-25.5-26.5-27.5-17-18.11L822 1595l-19.5-27.5L785 1538l-17-28-15-32-12-32-12-35-11.5-36-6-41.5-7-54.5v-39l3.509-50'
        ></motion.path>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id='#out'
          d='M1926.5 1156.59h-68.79V1110h-60.21v46.59h-44v57.91h44v69h-44v55.5l44 3v46h56.5l3.71-46h66.79l2 46h57.5v-49h45v-55.5h-45v-69h45v-57.91h-45V1110h-57.5v46.59z'
        ></motion.path>
        <motion.path 
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id='#In' 
          d='M1925.5 1213.5h-69.51v69.5h69.51v-69.5z'>
        </motion.path>
      </g>
    </svg>
  );
}

export default Icon;
