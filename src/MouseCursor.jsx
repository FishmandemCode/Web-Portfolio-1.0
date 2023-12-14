import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Cursor = styled(motion.div)`
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 999;

  @media (pointer: coarse)  {
    display: none;
  }
`;

const MouseCursor = ({ MouseVarient, CursorState }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorState, setCursorState] = useState('visible');

  const cursorSize = 25;
  const cursorLSize = 15;

  const mouseVariants = {
    visible: {
      x: mousePosition.x - cursorSize / 2,
      y: mousePosition.y - cursorSize / 2,
    },
    text: {
      height: 15,
      width: 15,
      x: mousePosition.x - cursorLSize / 2,
      y: mousePosition.y - cursorLSize / 2,
    },
  };

  const moveMouse = (e) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };

  useEffect(() => {
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    window.addEventListener('mousemove', moveMouse);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
    };
  }, []);


  return (
    <Cursor
      className="custom-mouse-cursor"
      variants={mouseVariants}
      initial="visible"
      animate={CursorState}
    />
  );
};

export default MouseCursor;
