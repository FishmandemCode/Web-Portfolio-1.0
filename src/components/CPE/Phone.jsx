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
      viewBox="0 0 3348 4276"
    >
      <motion.path
        initial="hidden"
        animate="visible"
        variants={PathVariants}
        stroke="#ffffff"
        strokeWidth="75"
        d="M229.679 273.568l89.708-88.57 106.012-75 121.999-56.5 156-36.5 127.5-6.5 123 18 132.502 43 64 38.499 46 56.5 24.5 56.001 6.5 58.5-52.5 976.502-18 57.5-29 46-39.5 43-67.5 30-74.478 21.5-78.003 10.5-70.985 6.5H738.93l10.53 101.5 29.03 156 45.013 176.5 56.499 172 91.001 204.5 99.517 184 87.5 134.5 144.5 181 116.5 129.5 166 150.5 151.5 113.5 187.5 119.5 38.5-95 79-122 65-69.5 67.5-30 77-8.5 48 8.5 919 354 52 38.5 47 61 20.5 76v90l-20.5 123-47 140-69.5 95-66 90-123 100.5-162.5 85.5-116.5 24.5-103 8.5h-103.5l-129.5-24.5-187-48-329.51-120-203-96L1464 3856l-217.99-149.5-209.99-173.5-194.499-187-178.5-207.5-148.484-213-175.5-293-132.5-311-63.016-199-77-297L25.514 1528l-15-222.5 5.5-277 29-245.001L100.51 506.5l62-136.5 67.161-96.432"
      ></motion.path>
    </svg>
  );
}

export default Icon;
