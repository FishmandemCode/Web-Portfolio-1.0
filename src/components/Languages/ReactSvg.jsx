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
      viewBox="0 0 1452 1311"
    >
      <g id="Group 4" stroke="#fff" strokeWidth="6">
        <g id="Group 1">
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 1"
            d="M456.854 162.526l21.648-6.023h29l36 3 44.999 17.5 33.5 19 43.5 30 42 37 60.5 60 39 46 32.5 42.5 54 76 43 74.5 50.5 99 34.999 82.5 17 54.5 14.5 52.5 10 47 7.5 47.5 3 35-3 35.997-4 35-7.5 28-14 27-14 17.5-16 14-21.499 10.5-23 8h-33l-36.999-4.5-32-14-44-23.5-37.5-27.5-47.5-39-48.501-50.997-28.5-30-33-38.5-34.5-47-38-57-25-46.5-36.5-64-40-80.499-27-74.5-16.5-45-17.5-68-13.5-71.5-3-42.001 3-49.5 10.5-49.5 22-37 19.5-22.5 23.352-10.98"
          ></motion.path>
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 2"
            d="M478.162 210.989l16.384-5.183 22.576.291 28.259 3.051 36.392 16.141 27.556 17.371 36.196 27.334 35.572 33.596 51.762 54.402 33.936 41.634 28.604 38.432 47.945 68.682 39.266 67.228 47.008 89.269 33.659 74.32 17.47 49.035 15.369 47.217 11.434 42.24 9.53 42.664 5.06 31.411.46 32.248-.39 31.338-3.66 25.03-8.8 24.07-9.54 15.55-11.369 12.39-15.922 9.2-17.283 6.94-25.69-.33-29.154-4.4-25.999-12.88-36.08-21.51-31.331-25.03-40.009-35.44-41.721-46.217-24.519-27.183-28.682-34.85-30.511-42.486-34.013-51.486-23.076-41.943-33.389-57.748-37.396-72.577-26.81-67.067-16.342-40.512-18.909-61.145-16.067-64.242-5.6-37.687-1.512-44.352 4.327-44.276 14.251-32.954 13.431-19.977 17.326-9.611"
          ></motion.path>
        </g>
        <g id="Group 2">
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 1_2"
            d="M1017.56 175.774l16.06 15.71 14.54 25.092 15.46 32.652 7.42 47.709.35 38.512-4.14 52.678-10.96 54.891-21.58 82.429-20.25 56.807-20.474 49.428-38.683 84.827-42.9 74.558-60.338 93.33-53.834 71.647-38.631 42.034-38.155 38.872-35.652 32.21-37.338 30.31-28.779 20.14-32.652 15.46-32.289 14.08-27.986 7.55-30.381 1.43-22.161-3.34-20.135-6.83-19.864-13.34-18.454-15.89-16.545-28.55-14.657-34.27-3.931-34.7-1.728-49.856 4.993-46.234 9.929-60.653 19.809-67.534 11.667-39.7 16.766-47.855 23.368-53.415 30.266-61.457 27.698-44.945 37.075-63.669 49.596-74.97 50.922-60.714 30.663-36.838 50.061-49.235 55.095-47.529 34.836-23.654 44.333-22.222 48.093-15.734 43.044.485 29.245 5.591 21.208 14.699"
          ></motion.path>
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 2_2"
            d="M986.31 218.508l12.699 11.578 11.071 19.679 11.53 25.98 4.28 39.58-1.22 32.552-5.5 45.022-11.23 47.622-21.122 72.062-19.009 50.237-18.91 44.018-35.388 75.919-38.48 67.68-53.67 85.43-47.428 66.386-33.667 39.701-33.148 36.97L676.305 1010l-32.135 29.64-24.643 20.12-27.67 16.57-27.314 15.37-23.493 9.38-25.236 4.45-18.237-.45-16.421-3.63-15.942-9.16-14.672-11.47-12.594-22.4-10.805-27.43-1.897-28.95.522-42.002 5.951-39.659 10.607-52.388 19.066-59.268 11.227-34.843 15.772-42.29 21.463-47.7 27.495-55.243 24.719-40.995 33.225-57.843 44.046-68.745 44.587-56.822 26.859-34.452 43.423-47.017 47.529-46.111 29.8-23.741 37.616-23.545 40.479-18.455 35.657-4.192 24.02 1.605 17.003 10.172"
          ></motion.path>
        </g>
        <g id="Group 3">
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 1_3"
            d="M1287.26 665.205l-5.44 21.799-14.32 25.221-20.38 29.828-37.43 30.497-33.06 19.756-47.56 23.023-52.91 18.263-82.045 22.999-59.256 11.212-53.004 7.286-92.751 9.449-86.016.622-111.026-4.948-89.025-10.284-55.79-12.117-52.815-13.304-45.812-14.503-45.012-16.924-31.919-14.667-29.828-20.379-28.465-20.755-20.649-20.344-16.571-25.503-8.308-20.814-4.278-20.825 1.48-23.881 4.396-23.952 16.289-28.699 22.178-29.957 27.97-20.919 42.157-26.666 42.427-19.039 57.364-22.059 68.294-17.006 40.158-9.979 49.772-9.695 57.904-6.805 68.329-4.912 52.781 1.211 73.676-.153 89.754 4.949 78.119 13.292 47.282 7.863 67.78 18.346 68.84 23.552 38.01 18.123 41.57 27.042 37.86 33.566 21.32 37.396 9.95 28.065-1.98 25.729"
          ></motion.path>
          <motion.path
            initial="hidden"
            animate={isTextHovered ? 'visible' : 'hidden'}
            variants={animationVariants}
            id="Line 2_3"
            d="M1234.6 659.814l-3.58 16.807-11.4 19.491-16.6 23.07-32 23.682-28.71 15.39-41.64 17.987-46.77 14.353-72.867 18.163-52.96 8.963-47.542 5.906-83.399 7.795-77.848.965-100.84-3.182-81.25-7.412-51.268-9.011-48.65-9.941-42.381-10.903-41.809-12.77-29.813-11.108L295 752.544l-27.063-15.813-19.96-15.54-16.587-19.533-8.815-15.972-5.167-16.003-.141-18.387 2.494-18.457 12.969-22.179 18.222-23.18 24.029-16.257 36.517-20.76 37.236-14.892 50.574-17.3 60.784-13.473 35.743-7.905 44.466-7.743 52.01-5.563 61.566-4.166 47.867.634 66.704-.533 81.578 3.302 71.561 9.789 43.3 5.784 62.513 13.737 63.8 17.737 35.54 13.733 39.32 20.578 36.37 25.618 21.62 28.66 10.75 21.542-.2 19.812"
          ></motion.path>
        </g>
        <motion.path
          initial="hidden"
          animate={isTextHovered ? 'visible' : 'hidden'}
          variants={animationVariants}
          id="Ellipse 1"
          d="M725.5 754.5c55.745 0 101-44.064 101-98.5s-45.255-98.5-101-98.5-101 44.064-101 98.5 45.255 98.5 101 98.5z"
        ></motion.path>
      </g>
    </svg>
  );
}

export default Icon;