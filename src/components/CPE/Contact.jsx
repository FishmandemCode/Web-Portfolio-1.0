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
      viewBox="0 0 6685 6706"
    >
      <g stroke="white" strokeWidth="100">
        <motion.path 
        initial="hidden"
        animate="visible"
        variants={PathVariants}
        d="M1979.09 1345.47l156.98-123 178.52-119.5 203-104.502 202-74 246.5-59.499 221-28.999 271.5-.001 248.5 29 258 77 270.5 101.501 252.5 152.5 171.5 145.5 168.5 165.5 141 174 153.5 248.5 86 200.5 61.5 219 43.5 276 14 280-58 315.5-96 331-144.5 321.5-186.49 315.5-274.51 450-1246.51 2048-1660.49-2728.5-137.51-310.5-109.5-293.5-91-406.5v-365l107.5-387 142.5-340.5 186.5-282.5 219.52-227"></motion.path>
        <motion.path 
        initial="hidden"
        animate="visible"
        variants={PathVariants}
        d="M3315.09 3775.97c515.89 0 934-420.69 934-939.5 0-518.82-418.11-939.5-934-939.5s-934 420.68-934 939.5c0 518.81 418.11 939.5 934 939.5z"></motion.path>
      </g>
    </svg>
  );
}

export default Icon;
