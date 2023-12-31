import React from "react";
import { delay, motion } from "framer-motion"

function Icon({ isTextHovered }) {
    const animationVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.3} },
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
      viewBox="0 0 1688 818"
    >

      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="893"
        height="25"
        y="136"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="268"
        height="49"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="24.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="959"
        height="25"
        y="191"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="916"
        height="25"
        y="246"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="935"
        height="25"
        y="301"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="893"
        height="25"
        y="382"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="959"
        height="25"
        y="437"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="916"
        height="25"
        y="492"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="935"
        height="25"
        y="547"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="893"
        height="25"
        y="628"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="959"
        height="25"
        y="683"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="916"
        height="25"
        y="738"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="935"
        height="25"
        y="793"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="12.5"
      ></motion.rect>
      <motion.rect
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        width="600"
        height="657"
        x="1088"
        y="148"
        fill="#ffffff"
        fillOpacity="0.1"
        rx="71"
      ></motion.rect>
      <motion.path 
        initial="hidden"
        animate="visible"
        variants={PathVariants}
      stroke="#ffffff" d="M0 76.5L516 76.5"></motion.path>
    </svg>
  );
}

export default Icon;
