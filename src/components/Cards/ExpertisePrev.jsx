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
      width="1688"
      height="813"
      fill="none"
      viewBox="0 0 1688 813"
    >
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="268"
        height="49"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="24.5"
      ></motion.rect>
      <motion.path 
        initial="hidden"
        animate="visible"
        variants={PathVariants}
        stroke="#fff" d="M0 76.5L516 76.5"></motion.path>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="290.722"
        height="237.593"
        y="131"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="416.857"
        height="319.25"
        x="311.05"
        y="131"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="137.891"
        height="247.26"
        y="387.927"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="68.945"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="137.891"
        height="247.26"
        x="155.525"
        y="387.927"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="68.945"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="303.458"
        height="344.18"
        x="311.051"
        y="468.819"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="303.458"
        height="319.25"
        x="748.235"
        y="131"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="215.286"
        height="200.453"
        x="1072.02"
        y="131"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="351.463"
        height="200.453"
        x="1072.02"
        y="350.023"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="244.187"
        height="200.453"
        x="1443.81"
        y="350.023"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="379.139"
        height="200.453"
        x="1308.86"
        y="131"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="615.978"
        height="243.953"
        x="1072.02"
        y="569.047"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="416.857"
        height="344.18"
        x="634.837"
        y="468.819"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="290.722"
        height="158.48"
        y="654.52"
        fill="#D9D9D9"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
    </svg>
  );
}

export default Icon;
