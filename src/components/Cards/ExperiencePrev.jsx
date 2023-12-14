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
      viewBox="0 0 1600 810"
    >
      <g id="Experience Prew">
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Rectangle 14"
            width="268"
            height="49"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="24.5"
        ></motion.rect>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={PathVariants}
            id="Line 4" stroke="#fff" d="M0 74.5L573.032 74.5"></motion.path>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Line 5"
            stroke="#fff"
            strokeOpacity="0.5"
            d="M0 -0.5L666.904 -0.5"
            transform="rotate(89.714 342.494 487.928) skewX(.036)"
        ></motion.path>
        <motion.ellipse
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Ellipse 1"
            cx="829.26"
            cy="191.897"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="31.65"
            ry="33.58"
        ></motion.ellipse>
        <motion.ellipse
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Ellipse 2"
            cx="829.26"
            cy="510.028"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="31.65"
            ry="33.58"
        ></motion.ellipse>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Container2"
            fill="#D9D9D9"
            fillOpacity="0.1"
            d="M58 143H739.863V431.674H58z"
        ></motion.path>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Container1"
            fill="#ffffff"
            fillOpacity="0.1"
            d="M925.32 476.447H1599.409V765.121H925.32z"
        ></motion.path>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text"
            fill="#ffffff"
            fillOpacity="0.1"
            d="M87.984 229.601c0-8.134 6.594-14.728 14.729-14.728h498.043c8.134 0 14.728 6.594 14.728 14.728 0 8.135-6.594 14.729-14.728 14.729H102.713c-8.134 0-14.729-6.594-14.729-14.729z"
        ></motion.path>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_2"
            fill="#ffffff"
            fillOpacity="0.1"
            d="M87.984 182.472c0-8.134 6.594-14.728 14.729-14.728h121.575c8.134 0 14.728 6.594 14.728 14.728 0 8.135-6.594 14.729-14.728 14.729H102.713c-8.135 0-14.729-6.594-14.729-14.729z"
        ></motion.path>
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_3"
            width="566.368"
            height="29.456"
            x="87.984"
            y="269.074"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
        < motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_4"
            width="540.826"
            height="29.456"
            x="87.984"
            y="323.272"
            fill="#D9D9D9"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_5"
            width="551.932"
            height="29.456"
            x="87.984"
            y="377.474"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_6"
            fill="#ffffff"
            fillOpacity="0.1"
            d="M969.742 563.051c0-8.135 6.594-14.729 14.728-14.729h498.04c8.14 0 14.73 6.594 14.73 14.729 0 8.134-6.59 14.728-14.73 14.728H984.47c-8.134 0-14.728-6.594-14.728-14.728z"
        ></motion.path>
        <motion.path
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_7"
            fill="#ffffff"
            fillOpacity="0.1"
            d="M969.742 515.92c0-8.135 6.594-14.729 14.728-14.729h121.58c8.13 0 14.72 6.594 14.72 14.729 0 8.134-6.59 14.728-14.72 14.728H984.47c-8.134 0-14.728-6.594-14.728-14.728z"
        ></motion.path>
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_8"
            width="566.368"
            height="29.456"
            x="969.742"
            y="602.521"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            id="Text_9"
            width="540.826"
            height="29.456"
            x="969.742"
            y="656.722"
            fill="#ffffff"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
        <motion.rect
            initial="hidden"
            animate="visible"
            variants={animationVariants}    
            id="Text_10"
            width="551.932"
            height="29.456"
            x="969.742"
            y="710.921"
            fill="#170404"
            fillOpacity="0.1"
            rx="14.728"
        ></motion.rect>
      </g>
    </svg>
  );
}

export default Icon;
