import React from "react";
import { motion } from "framer-motion"

function Icon({ isTextHovered }) {
    const animationVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.3 } },
    };
    const PathVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.3 } },
      };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 5647 6541"
    >
      <g stroke="#ffffff" strokeWidth="170">
        <motion.path
        initial="hidden"
        animate="visible"
        variants={PathVariants}
         d="M12.02 2820H5627v3698.5H12.015V2820"></motion.path>
        <motion.path
        initial="hidden"
        animate="visible"
        variants={PathVariants}
         d="M7.36 2812.65l2826.68 2798.8L5632 2813"></motion.path>
        <motion.path
        initial="hidden"
        animate="visible"
        variants={PathVariants}
         d="M1884.05 4676.1L14.046 6533.1"></motion.path>
        <motion.path
        initial="hidden"
        animate="visible"
        variants={PathVariants}
         d="M3784.05 4675.91L5639.05 6518.91"></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
