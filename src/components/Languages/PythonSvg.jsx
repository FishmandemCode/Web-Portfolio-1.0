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
      viewBox="0 0 762 754"
    >
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        id="TopHole"
        stroke="#fff"
        strokeWidth="3"
        d="M313.5 97c0 20.693-16.995 37.5-38 37.5s-38-16.807-38-37.5 16.995-37.5 38-37.5 38 16.807 38 37.5z"
      ></motion.path>
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        id="BottomHole"
        stroke="#fff"
        strokeWidth="3"
        d="M517.5 663c0 20.693-16.995 37.5-38 37.5s-38-16.807-38-37.5 16.995-37.5 38-37.5 38 16.807 38 37.5z"
      ></motion.path>
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        id="TopPart"
        stroke="#F8F8F8"
        strokeWidth="3.012"
        d="M52 539.5L78 556l23 7.999h72V456.5l9-29.5 12.5-19.5L210 392l25.5-16.5 29-8.497h201L493 363.5l22.5-11L534 340l13-16.5 9-17 4-21.5V89.5l-4-22L540.5 51 521 35l-16.5-10L483 15l-23.5-7.313L432.5 4l-23-2H338l-30.5 2-18 2.5-14 3L254 15l-17.5 8-13 8.5-12.5 11L199 59l-4.5 18.5V173H375v31.002H111.5L85 207l-22 9.5-14 12L36.5 245l-13 19.5-9.496 23.503L5 325l-3 42.003V406.5l3 35 5 26 10 27L32.5 518 52 539.5z"
      ></motion.path>
      <motion.path
        initial="hidden"
        animate={isTextHovered ? 'visible' : 'hidden'}
        variants={animationVariants}
        id="BotPart"
        stroke="#F8F8F8"
        strokeWidth="3.012"
        d="M711.545 216.456l-25.868-16.705-22.936-8.181-25-.198-46.998-.372-.851 107.496-9.233 29.428-12.654 19.4-15.622 15.377-25.63 16.298-29.066 8.267-47.499-.376-62.498-.495-90.997-.72-27.527 3.286-22.586 10.821-18.598 12.354-13.131 16.396-9.134 16.928-4.17 21.468L200 662.422l3.826 22.031 15.369 16.622 19.372 16.154 16.421 10.13 21.42 10.17 23.441 7.498 26.97 3.901 22.984 2.182 25.999.206 21.499.17 24 .19 30.514-1.758 18.02-2.358 14.023-2.889 21.543-5.33 17.563-7.861 13.066-8.397 12.587-10.901 12.13-16.404 4.647-18.464.755-95.497-180.494-1.428.245-31.002 263.492 2.085 26.523-2.787 22.074-9.326 14.095-11.889 12.63-16.4 13.154-19.397 9.682-23.427 9.296-36.924 3.333-41.979.312-39.495-2.723-35.023-4.794-26.039-9.786-27.078-12.314-23.598-19.329-21.654z"
      ></motion.path>
    </svg>
  );
}

export default Icon;
